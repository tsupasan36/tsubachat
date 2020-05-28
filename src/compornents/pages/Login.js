import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";

import "../styles/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      loading: false,
      errors: [],
    };
  }

  formValidation = () => {
    let errors = [];
    let error = "";
    if (this.state.email === null) {
      error = { message: "Email is empty" };
      this.setState({ loading: false, errors: errors.concat(error) });
      return false;
    } else if (this.state.password === null) {
      errors.push("Password is empty");
      return false;
    } else {
      return true;
    }
  };

  emailHandler = (e) => {
    this.setState({ email: e.currentTarget.value });
  };

  passwordHandler = (e) => {
    this.setState({ password: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    if (this.formValidation()) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="ui login-container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image login-header">
              <div className="login-content">
                <i className="puzzle piece icon"></i>Log-in to Awesome Chat
              </div>
            </h2>
            <form className="ui large form" onSubmit={this.handleSubmit}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="E-mail address"
                      onChange={this.emailHandler}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.passwordHandler}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="ui fluid large teal submit button login_button"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? (
                    <i
                      className="fa fa-refresh fa-spin"
                      style={{ marginRight: "5px" }}
                    />
                  ) : (
                    <span>Login</span>
                  )}
                </button>
              </div>
            </form>
            {this.state.errors.length !== 0 && (
              <div className="ui error message">
                {this.state.errors.map((error, index) => {
                  return <p key={index}>{error.message}</p>;
                })}
              </div>
            )}

            <div className="ui message">
              Don't have account? <Link to="/">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
