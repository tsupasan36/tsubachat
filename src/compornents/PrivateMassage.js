import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import "./styles/privatemessage.css";

class PrivateMassage extends Component {
  render() {
    return (
      <div>
        <div className="ui pm-container">
          <i className=" envelope icon">DIRECT MESSAGES (4)</i>
        </div>
        <Menu text vertical>
          <Menu.Item>roden</Menu.Item>
          <Menu.Item>hiroki</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default PrivateMassage;
