import React, { Component } from "react";
import "./styles/channelheader.css";

class ChannelHeader extends Component {
  render() {
    return (
      <div className="ui segment ch-container">
        <h2 className="ui header">＃Channel-2</h2>
        <p>2 Users</p>
      </div>
    );
  }
}

export default ChannelHeader;
