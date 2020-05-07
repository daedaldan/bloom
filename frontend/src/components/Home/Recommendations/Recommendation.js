import React, { Component } from 'react';

export default class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Connect",
      connected: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
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

    e.preventDefault();
  }

  render() {
    return (
        <a href={this.props.profileCardLink}>
          <div className="card-border user-card">
            <img className="user-card-photo"
                 src={this.props.profilePhotoLink}
                 alt="profile photo"
            />
            <h2>{this.props.firstName} {this.props.lastName}</h2>
            <p>{this.props.bio}</p>
            <button onClick={this.handleClick}>{this.state.buttonText}</button>
          </div>
        </a>);
  }
}

