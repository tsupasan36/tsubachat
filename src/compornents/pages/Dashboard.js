import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div class="ui inverted vertical menu">
          <a class="active item">Home</a>
          <a class="item">Messages</a>
          <a class="item">Friends</a>
        </div>
      </div>
    );
  }
}

export default Dashboard;
