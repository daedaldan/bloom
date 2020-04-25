import React, { Component } from 'react';
import './App.css';
import {Match} from "../Home/Matches/Match";

export function NavigationBar(props) {
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
