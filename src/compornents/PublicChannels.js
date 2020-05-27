import React, { Component } from "react";
import { Button, Header, Icon, Modal, Input, Menu } from "semantic-ui-react";
import firebase from "../Firebase";
import { connect } from "react-redux";
import { changeChannel } from "../actions";

import "./styles/PublicChannel.css";

class PublicChannels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelName: "",
      description: "",
      channels: [],
      channelRef: firebase.database().ref("channels"),
    };
  }

  componentWillMount() {
    let loadedChannels = [];
    this.state.channelRef.on("child_added", (channel) => {
      loadedChannels.push(channel.val());
      this.setState({ channels: loadedChannels }, () => {
        this.props.dispatch(changeChannel(loadedChannels[0]));
      });
    });
  }

  handleChannelName = (e) => {
    this.setState({ channelName: e.currentTarget.value });
  };

  handleChannelDescription = (e) => {
    this.setState({ description: e.currentTarget.value });
  };

  handleSubmitChannel = (e) => {
    const channelRef = this.state.channelRef;

    const newChannel = {
      id: channelRef.push().key,
      name: this.state.channelName,
      details: this.state.description,
      createdBy: {
        name: this.props.currentUser.displayName,
        avatar: this.props.currentUser.photoURL,
      },
    };

    channelRef
      .child(channelRef.push().key)
      .update(newChannel)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  changeChannel = (channel) => {
    this.props.dispatch(changeChannel(channel));
  };

  handleCancel = () => {};

  render() {
    const channels = this.state.channelName;
    return (
      <div className="channel-container">
        <i className="fas fa-exchange-alt">Channels (4)</i>

        <Modal
          trigger={
            <button className="ui addChannel-button">
              <i className="plus icon"></i>
            </button>
          }
          basic
          size="small"
          style={{
            height: "fit-content",
            position: "absolute",
            left: "auto",
            top: "auto",
          }}
        >
          <Header content="Add a Channel" />
          <Modal.Content>
            <div className="input-box"></div>
            <Input
              label={<Button content="Channel Name" />}
              labelPosition="left"
              fluid
              style={{ marginBottom: "15px" }}
              onChange={this.handleChannelName}
            />
            <Input
              label={<Button content="About the Channel" />}
              labelPosition="left"
              fluid
              style={{ marginBottom: "15px" }}
              onChange={this.handleChannelDescription}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmitChannel}>
              <Icon name="checkmark" /> Add
            </Button>
            <Button inverted color="red" onClick={this.handleCancel}>
              <Icon name="remove" />
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
        <Menu text vertical>
          {this.state.channels.map((channel) => {
            return (
              <Menu.Item
                style={{ color: "darkgray" }}
                onClick={() => {
                  this.changeChannel(channel);
                }}
              >
                #{channel.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(PublicChannels);
