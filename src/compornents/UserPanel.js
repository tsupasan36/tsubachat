import React, { Component } from "react";
import { Image } from "semantic-ui-react";

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
          <Image src={this.props.currentUser.photoURL} avatar />

          <span>{this.props.currentUser.displayName}</span>
          <DropdownExampleDropdown />
        </div>
      </div>
    );
  }
}

export default Userpanel;
