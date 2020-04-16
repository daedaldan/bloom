import React from 'react';
import './App.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";

const required = value => {
  if (!value) {
    return (
        <div role="alert">
          This field is required.
        </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
        <div role="alert">
          This is not a valid email.
        </div>
    );
  }
};
