import React, { Component } from 'react';
import './App.css';

export function Interest(props) {
  return (
      <div className="interest"><p>{props.interestName}</p></div>
  );
}
