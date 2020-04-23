import React, { Component } from 'react';
import './App.css';

export default class NavigationBar extends Component {
  render() {
    return (
        <div className="navbar">
          <p className="logo">Bloom</p>
          <ul>
            <li>Profile</li>
            <li>Home</li>
          </ul>
        </div>
      );
  }
}
