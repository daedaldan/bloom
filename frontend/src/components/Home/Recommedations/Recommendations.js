import React, { Component } from 'react';
import './App.css';

import { Recommendation } from './Recommendation.js';

export function Recommendations(props) {
  const recommendations = props.recommendations.map((recommendation) =>
    <Recommendation profileCardLink={props.profileCardLink}
           profilePhotoLink={recommendation.profilePhotoLink}
           firstName={recommendation.firstName}
           lastName={recommendation.lastName}
           bio={recommendation.bio}/>
  );

  return (
      <div>
        <h1>Recommendations</h1>
        <div>{recommendations}</div>
      </div>
  );
}
