import React, { Component } from 'react';
import './App.css';

import { Recommendations } from '../Recommendations.js';
import { Matches } from '../Matches.js';

export function Home(props) {
  return (
      <div>
        <Recommendations recommendations="lol"/>
        <Matches matches="lol"/>
      </div>
  );
}
