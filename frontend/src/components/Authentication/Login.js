import React, { Component } from 'react';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../services/auth-service";

const required = value => {
  if (!value) {
    return (
        <div role="alert">
          This field is required.
        </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.LogIn = this.LogIn.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  LogIn(e) {
    e.preventDefault();

    this.props.handleLogIn();
    console.log("in login");

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.email, this.state.password).then(
          () => {
            this.props.history.push("/home")
            window.location.reload();
          },
          error => {
            const resMessage =
                (error.response && error.response.data && error.response.data.message) ||
                (error.message || error.toString());

            this.setState({
              loading: false,
              message: resMessage
            });
          }
        );
    } else {
      this.setState({
        loading: false
      });
    }

    console.log("pushed the props in login");
  }

  render() {
    return (
        <div>
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
            this.form = c;
            }}
          >
            <div>
              <label htmlFor="username">Username</label>
              <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  validations={[required]}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  validations={[required]}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required]}
              />
            </div>

            <div>
              <button
                disabled={this.state.loading}
              >
                {this.state.loading /*&& (
                    <span></span>
                )*/}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
                <div role="alert">
                  {this.state.message}
                </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
    );
  }
}
