import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/register.css";

class Register extends Component {
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
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" name="email" placeholder="Username" />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" name="email" placeholder="Password" />
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="Password Confirmation"
                    />
                  </div>
                </div>
                <div className="ui fluid large teal submit button register_button">
                  Sign Up
                </div>
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
