import React, { Component } from "react";
import "./styles/message.css";
import { Comment } from "semantic-ui-react";
import { connect } from "react-redux";
import firebase from "../Firebase";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageRef: firebase.database().ref("messages"),
      messages: [],
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;

    if (oldProps.channel !== newProps.channel) {
      if (oldProps.channel.currentChannel !== null) {
        this.state.messageRef.child(oldProps.channel.currentChannel.id).off();
      }
      const currentChannel = newProps.channel.currentChannel;
      const currentUser = newProps.user.currentUser;
      // console.log(currentChannel);
      this.addListeners(currentChannel);
    }
  }

  addListeners = (channel) => {
    this.addMessageListener(channel);
  };

  addMessageListener = (channel) => {
    console.log(channel);

    let loadedMessages = [];
    this.setState({ messages: loadedMessages });
    this.state.messageRef.child(channel.id).on("child_added", (message) => {
      loadedMessages.push(message.val());
      this.setState({ messages: loadedMessages });
    });
  };

  render() {
    return (
      <div className="ui segment" style={{ flexGrow: 1 }}>
        <Comment.Group>
          {this.state.messages.map((message) => {
            return (
              <Comment>
                <Comment.Avatar src={message.user.avatar} />
                <Comment.Content>
                  <Comment.Author as="a">{message.user.name}</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>{message.content}</Comment.Text>
                </Comment.Content>
              </Comment>
            );
          })}
        </Comment.Group>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  channel: state.channel,
});

export default connect(mapStateToProps, null)(Messages);
