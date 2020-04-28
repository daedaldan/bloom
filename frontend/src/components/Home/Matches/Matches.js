import React from 'react';

import Match from './Match.js';

export default function Matches(props) {
  const matches = props.matches.map((match) =>
    <Match profileCardLink={props.profileCardLink}
           profilePhotoLink={match.profilePhotoLink}
           firstName={match.firstName}
           lastName={match.lastName}
           bio={match.bio}/>
  );

  return (
      <div>
        <h1>Matches</h1>
        <div>{matches}</div>
      </div>
  );
}
