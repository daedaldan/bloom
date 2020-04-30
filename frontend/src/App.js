import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AuthService from "./services/auth-service.js";

import LandingPage from "./components/LandingPage/LandingPage.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Home from "./components/Home/Home.js";
import Matches from "./components/Home/Matches/Matches.js";
import Match from "./components/Home/Matches/Matches.js";
import Recommendations from "./components/Home/Recommendations/Recommendations.js";
import Recommendation from "./components/Home/Recommendations/Recommendation.js";
import ProfileCard from "./components/ProfileCard/ProfileCard.js";
import Interests from "./components/ProfileCard/Interests.js";
import Interest from "./components/ProfileCard/Interest.js";
import Settings from "./components/Settings/Settings.js";
import Login from "./components/Authentication/Login.js";
import Register from "./components/Authentication/Register.js";

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
]
const requests = [
  {
    "sender": 1,
    "receiver": 2,
    "status": 0
  },
]
const matches = [
    {
    "userA": 2,
    "friendA": 3,
    "userB": 3,
    "friendB": 2
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined
    };

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

  logOut() {
      AuthService.logout();
  }

  render() {
    const currentUser = this.state;

    return (
        <div>
          <NavigationBar/>
          {/*<Home/>*/}
        </div>

    );
  }
}

export default App;
