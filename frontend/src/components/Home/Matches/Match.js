import React from 'react';

export default function Match(props) {
  return (
      <a href={props.profileCardLink}>
        <div className="card-border user-card">
          <img className="user-card-photo"
               src={props.profilePhotoLink}
               alt="profile photo"
          />
          <h2>{props.firstName} {props.lastName}</h2>
          <p>{props.bio}</p>
          <button className="user-card-button">Chat</button>
        </div>
      </a>
  );
}
