import React from 'react';
import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
