import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.handleLogOut();
    this.props.history.push("/");
  }

  render() {
    return (
        <button onClick={this.logOut}>Logout</button>
    );
  }
}

export default withRouter(Settings);
