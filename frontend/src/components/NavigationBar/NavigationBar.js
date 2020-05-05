import React, { Component } from 'react';

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Website from "../Website/Website.js";
import Home from "../Home/Home.js";
import Settings from "../Settings/Settings.js";
import Login from "../Authentication/Login.js";
import Register from "../Authentication/Register.js";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: props.currentUser
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentUser: nextProps.currentUser
    });
  }

  render() {
    let navbarLinks;

    if (this.props.currentUser !== undefined) {
      navbarLinks = (<ul>
                      <li>
                        <Link to="/settings">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/home">
                          Home
                        </Link>
                      </li>
                    </ul>);
    } else {
      navbarLinks = (<ul>
                      <li>
                        <Link to="/login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/register">
                          Sign Up
                        </Link>
                      </li>
                    </ul>);
    }

    return (
      <div>
        <BrowserRouter>
          <nav className="navbar">
            <p className="logo">Bloom</p>
            {navbarLinks}
          </nav>
          <Switch>
            <Route exact path="/" component={Website} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/settings" render={props => (<Settings handleLogOut={this.props.logOut} />)} />
            <Route exact path="/login" render={props => (<Login handleLogIn={this.props.logIn} />)} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
