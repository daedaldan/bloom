import React, { Component } from 'react';
import './App.css';

export class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Connect",
      connected: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.connected) {
      this.setState(state => ({
        buttonText: "Connect",
        connected: !state.connected
      }));
    } else {
      this.setState(state => ({
        buttonText: "Connected",
        connected: !state.connected
      }));
    }
  }

  render() {
    return (
        <a href={this.props.profileCardLink}>
          <div class="card-border user-card">
            <img class="user-card-photo"
                 src={this.props.profilePhotoLink}
                 alt="profile photo"/>
            <h2>{this.props.firstName} {this.props.lastName}</h2>
            <p>{this.props.bio}</p>
            <button class="user-card-button" onClick={this.handleClick}>{this.state.buttonText}</button>
          </div>
        </a>);
  }
}

