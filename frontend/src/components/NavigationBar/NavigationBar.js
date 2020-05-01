import React from 'react';

import { BrowserRouter as BrowserRouter, Link, Route, Switch, withRouter } from "react-router-dom";
import Home from "../Home/Home.js";
import Settings from "../Settings/Settings.js";
import Login from "../Authentication/Login.js";
import Register from "../Authentication/Register.js";

export default function NavigationBar(props) {
  let navbarLinks;
  if (props.currentUser) {
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
            <Route exact path="/home" component={Home} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}
