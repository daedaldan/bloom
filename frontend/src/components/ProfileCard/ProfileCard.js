import React, { Component } from 'react';

import Interests from './Interests.js'

export default function ProfileCard(props) {
  return (
      <div className="card-border profile-card">
        <div className="user-info">
          <img className="profile-card-photo"
               src={props.profilePhotoLink}
               alt="profile photo"/>
            <div>
              <h2 className="profile-name">{props.firstName} {props.lastName}</h2>
              <p className="profile-line">{props.bio}</p>
            </div>
        </div>
        <p className="bio">{props.bio}</p>
        <Interests interests={props.interests}/>
        <button className="profile-card-button">Connect</button>
      </div>
  );
}
