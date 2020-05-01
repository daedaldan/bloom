import React, { Component } from 'react';

import Interest from './Interest.js'

export default function Interests(props) {
  const interests = props.interests.map((interest) =>
      <Interest interestName={interest} />
  )

  return (
      <div className="interests">
          {interests}
      </div>
  );
}
