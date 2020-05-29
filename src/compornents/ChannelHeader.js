import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/channelheader.css";
import { Input } from "semantic-ui-react";

class ChannelHeader extends Component {
  render() {
    return (
      <div className="ui segment ch-container ">
        <div>
          <h2 className="ui header">
            ＃
            {this.props.channel.currentChannel !== null
              ? this.props.channel.currentChannel.name
              : ""}
          </h2>
          {this.props.channel.isPrivate ? "" : <p>2 Users</p>}
        </div>
        {this.props.channel.isPrivate ? (
          ""
        ) : (
          <Input icon="search" placeholder="Search..." className="search" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { channel: state.channel };
};

export default connect(mapStateToProps)(ChannelHeader);
