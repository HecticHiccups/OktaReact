import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {

  state = { authenticated: null };

 checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async() => {
    this.props.auth.login('/');
  }

 logout = async() => {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ?
    <div >
      <p className="lead">You have entered Staff Portal <Link to='/staff'> Click Here </Link> </p>
      <button className="btn btn-light btn-lg" onClick={this.logout}> Log Out</button>
    </div>
      :
      <div >
      <p className="lead">If you're a staff member please get your credentials from your supervisor <Link to='/staff'> Click Here </Link> </p>
      <button className="btn btn-dark btn-lg" onClick={this.login}> Log In</button>
    </div>
      ;

    return (
      <div className = "jumbotron" >
        <h1 class="display-4">Acme Staff Portal </h1>
        {mainContent}
      </div>
    );
  }
});