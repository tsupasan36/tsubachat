import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import md5 from "md5";

import "../styles/register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
      passwordConfirmation: null,
    };
  }
  nameHandler = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  passwordHandler = (e) => {
    this.setState({ password: e.currentTarget.value });
  };

  emailHandler = (e) => {
    this.setState({ email: e.currentTarget.value });
  };

  passwordConfirmationHandler = (e) => {};

  handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header-register">
              <div className="content">
                <i class="puzzle piece icon"></i>Register for Awesome Chat
              </div>
            </h2>
            <form className="ui large form" onSubmit={this.handleSubmit}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="name"
                      placeholder="Username"
                      onChange={this.nameHandler}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i class="envelope outline icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      onChange={this.emailHandler}
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.passwordHandler}
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i class="redo icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password Confirmation"
                      onChange={this.passwordConfirmationHandler}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="ui fluid large teal submit button register_button"
                >
                  Sign Up
                </button>
              </div>

              <div className="ui error message"></div>
            </form>

            <div className="ui message">
              Already a User? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
