import React, { Component } from 'react';
import './App.css';

import AuthService from "./services/auth-service.js";

import NavigationBar from "./components/NavigationBar/NavigationBar.js";

const users = [
    {
        "username": "test_user1",
        "first_name": "Test",
        "last_name": "User 1",
        "email": "testuser1@email.com",
        "profile": {
            "line": "I am a user created by the admin to test the app during development.",
            "bio": "n/a",
            "contactInfo": "n/a",
            "profilePhotoLink": ""
        }
    },
    {
        "username": "test_user2",
        "first_name": "Test",
        "last_name": "User 2",
        "email": "testuser2@email.com",
        "profile": {
            "line": "I am a user created by the admin to test the app during development.",
            "bio": "n/a",
            "contactInfo": "n/a",
            "profilePhotoLink": ""
        }
    },
    {
        "username": "test_user3",
        "first_name": "Test",
        "last_name": "User 3",
        "email": "testuser3@email.com",
        "profile": {
            "line": "I am a user created by the admin to test the app during development.",
            "bio": "n/a",
            "contactInfo": "n/a",
            "profilePhotoLink": ""
        }
    }
];

const requests = [
  {
    "sender": 1,
    "receiver": 2,
    "status": 0
  },
];

const matches = [
    {
    "userA": 2,
    "friendA": 3,
    "userB": 3,
    "friendB": 2
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser()
      })
    }
  }

  logIn() {
    const user = AuthService.getCurrentUser();

    if (user) {
         this.setState({
           currentUser: AuthService.getCurrentUser()
         })
    }

    console.log(this.state.currentUser);
  }

  logOut() {
    AuthService.logout();

    this.setState({
      currentUser: undefined
    });
  }

  render() {
    return (
        <NavigationBar currentUser={this.state.currentUser} logIn={this.logIn} logOut={this.logOut} />
    );
  }
}

export default App;
