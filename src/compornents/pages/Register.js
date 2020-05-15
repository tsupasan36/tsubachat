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
      userRef: firebase.database().ref("users"),
      loading: false,
      errors: [],
    };
  }

  nameHandler = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  emailHandler = (e) => {
    this.setState({ email: e.currentTarget.value });
  };

  passwordHandler = (e) => {
    this.setState({ password: e.currentTarget.value });
  };

  passwordConfirmationHandler = (e) => {
    this.setState({ passwordConfirmation: e.currentTarget.value });
  };

  formValidation = () => {
    let errors = [];
    let error = "";
    if (this.state.name === null) {
      error = { message: "Name is empty" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (this.state.email === null) {
      errors.push("Email is empty");

      this.setState({ errors: errors });
      return false;
    } else if (this.state.password === null) {
      errors.push("Password is empty");

      this.setState({ errors: errors });
      return false;
    } else if (this.state.password !== this.state.passwordConfirmation) {
      errors.push("Name is different");

      this.setState({ errors: errors });
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    if (this.formValidation()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser) => {
          // console.log(createdUser);
          createdUser.user
            .updateProfile({
              displayName: this.state.name,
              photoURL: `https://gravatar.com/avatar/${md5(
                this.state.email
              )}?d=identicon `,
            })
            .then(() => {
              this.saveUser(createdUser);
              this.setState({ loading: false });
            });
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ loading: false });
        });
    }
  };

  saveUser = (createdUser) => {
    return this.state.userRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header-register">
              <div className="content">
                <i className="puzzle piece icon"></i>Register for Awesome Chat
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
                    <i className="envelope outline icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
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
                <div className="field">
                  <div className="ui left icon input">
                    <i className="redo icon"></i>
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
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <i
                      className="fa fa-refresh fa-spin"
                      style={{ marginRight: "5px" }}
                    />
                  )}
                  {!this.state.loading && <span>Sign Up</span>}
                </button>
              </div>
              {this.state.errors.map((error, index) => {
                return <div key={index}>{error.message}</div>;
              })}
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
