import React, { Component } from 'react'

class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  }
  //Retrieving localStorage object as IDtoken, parsing it as JSON obj, 
  //setting state of our component to the value within the Object
componentDidMount(){
  const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
  this.setState({
    currentUserEmail: idToken.idToken.claims.email,
    currentUserName: idToken.idToken.claims.name
  })
}
//Shows whats being rendered onto Staff Page
  render() {
    console.log(this.state);
   const {currentUserEmail, currentUserName} = this.state;
    return (
      <div>
        <h1>Welcome {currentUserName} </h1>
         <p>Email {currentUserEmail} </p>
         <p> You have been authorized into staff portal</p>
      </div>
    )
  }
}
export default Staff;

