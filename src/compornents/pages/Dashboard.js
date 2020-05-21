import React, { Component } from "react";

import UserPanel from "../UserPanel";
import PublicChannels from "../PublicChannels";
import ChannelHeader from "../ChannelHeader";
import Messages from "../Messages";
import MessageForm from "../MessageForm";
import MetaPanel from "../MetaPanel";
import PrivateMessage from "../PrivateMassage";

import "../styles/dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="ui grid ">
          <div className="three wide column column-left">
            <UserPanel />
            <PublicChannels />
            <PrivateMessage />
          </div>
          <div
            className="nine wide column column-center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <ChannelHeader />
            <Messages />
            <MessageForm />
          </div>
          <div className="four wide column column-right">
            <MetaPanel />
          </div>
        </div>
      </div>
    );
  }
}
