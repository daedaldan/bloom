import React from 'react';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import ProfileCard from "../ProfileCard/ProfileCard";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

export default function NavigationBar() {
  return (
      <div>
        <Router>
        <nav className="navbar">
          <p className="logo">Bloom</p>
          <ul>
            <li>
              <Link to={"/profile"}>
                Profile
              </Link>
            </li>
            <li>
              <Link to={"/home"}>
                Home
              </Link>
            </li>
          </ul>
        </nav>
        </Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={ProfileCard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
  );
}
