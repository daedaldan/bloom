import React, { Component } from 'react';
import './App.css';

import { Interest } from './Interest.js'

export function Interests(props) {
  const interests = props.interests.map((interest) =>
      <Interest interestName={interest.interest} />
  )

  return (
      <div className="interests">
          {interests}
      </div>
  );
}
