import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image login-header">
              <div className="content">
                <i class="puzzle piece icon"></i>Log-in to Awesome Chat
              </div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="E-mail address"
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
                    />
                  </div>
                </div>
                <div className="ui fluid large teal submit button login_button">
                  Login
                </div>
              </div>

              <div className="ui error message"></div>
            </form>

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
