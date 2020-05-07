import React, { Component } from 'react';

import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Website from "../Website/Website.js";
import Home from "../Home/Home.js";
import Settings from "../Settings/Settings.js";
import Login from "../Authentication/Login.js";
import Register from "../Authentication/Register.js";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navbarLinks;

    if (this.props.currentUser) {
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
            <p className="logo">
              <Link to="/">
                Bloom
              </Link>
            </p>
            {navbarLinks}
          </nav>
          <Switch>
            <Route exact path="/" component={Website} />
            <Route exact path="/home" render={props => (
                this.props.currentUser ?
                  <Home />
                : <Redirect to="/login" />
            )} />
            <Route exact path="/settings" render={props => (
                this.props.currentUser ?
                  <Settings handleLogOut={this.props.logOut} />
                : <Redirect to="/login" />
            )} />
            <Route exact path="/login" render={props => (
                !this.props.currentUser ?
                  <Login handleLogIn={this.props.logIn} />
                : <Redirect to="/home" />
            )} />
            <Route exact path="/register" render={props => (
                !this.props.currentUser ?
                  <Register />
                : <Redirect to="/home" />
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
