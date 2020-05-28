import React, { Component } from "react";
import "./styles/userpanel.css";

import DropdownExampleDropdown from "./functions/dropdown";

class Userpanel extends Component {
  render() {
    return (
      <div className="userPanel-container">
        <h2 className="ui header userPanel-header">
          <i className="fas fa-code"></i>
          <div className="header-content">AwesomeChat</div>
        </h2>
        <div className="user-profile">
          <img
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            className="ui avatar image"
          />
          <span>Username</span>
          <DropdownExampleDropdown />
        </div>
      </div>
    );
  }
}

export default Userpanel;
