import React, { Component } from 'react';
import './App.css';

export default class Recommendations extends Component {
  render() {
    return (
        <a href="google.com">
          <div class="card-border user-card">
            <img class="user-card-photo"
                 src="https://cdn.theatlantic.com/assets/media/img/nj/2016/1/26/asian-americans-feel-held/jason-shen-headshot.jpg"
                 alt="profile picture"/>
            <h2>Jonathon Yoon</h2>
            <p>Psychology student @ UChicago</p>
            <button class="user-card-button">Connect</button>
          </div>
        </a>);
  }
}

