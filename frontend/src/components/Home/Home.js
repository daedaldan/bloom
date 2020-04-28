import React from 'react';

import Recommendations from './Recommendations/Recommendations.js';
import Matches from './Matches/Matches.js';

const recommendations = [
  {
    "profilePhotoLink": "https://vignette.wikia.nocookie.net/meme/images/f/f3/Awesomeface.jpg/revision/latest/scale-to-width-down/340?cb=20111025204928",
    "firstName": "Jim",
    "lastName": "Carey",
    "bio": "I am Jim Carey"
  },
  {
    "profilePhotoLink": "https://vignette.wikia.nocookie.net/meme/images/f/f3/Awesomeface.jpg/revision/latest/scale-to-width-down/340?cb=20111025204928",
    "firstName": "Bob",
    "lastName": "Bob",
    "bio": "I am Bob Bob"
  }
];

const matches = [
  {
    "profilePhotoLink": "https://ibighit.com/bts/images/bts/discography/love_yourself-answer/album-cover.jpg",
    "firstName": "John",
    "lastName": "Doe",
    "bio": "I am John Doe"
  },
  {
    "profilePhotoLink": "https://vignette.wikia.nocookie.net/meme/images/f/f3/Awesomeface.jpg/revision/latest/scale-to-width-down/340?cb=20111025204928",
    "firstName": "Angela",
    "lastName": "Angel",
    "bio": "I am Angela Angela"
  }
];

export default function Home() {
  return (
      <div>
        <Recommendations recommendations={recommendations} profileCardLink="lol"/>
        <Matches matches={matches} profileCardLink="lol"/>
      </div>
  );
}
