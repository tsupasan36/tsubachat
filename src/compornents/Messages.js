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
      privateMessageRef: firebase.database().ref("privateMessages"),
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;

    if (oldProps.channel !== newProps.channel) {
      if (oldProps.channel.currentChannel !== null) {
        this.getMessageRef().child(oldProps.channel.currentChannel.id).off();
      }
      const currentChannel = newProps.channel.currentChannel;
      const currentUser = newProps.user.currentUser;

      this.addListeners(currentChannel);
    }
  }

  addListeners = (channel) => {
    this.addMessageListener(channel);
  };

  addMessageListener = (channel) => {
    let loadedMessages = [];
    this.setState({ messages: loadedMessages });
    this.getMessageRef()
      .child(channel.id)
      .on("child_added", (message) => {
        loadedMessages.push(message.val());
        this.setState({ messages: loadedMessages });
      });
  };

  getMessageRef = () => {
    const isPrivate = this.props.channel.isPrivate;
    return isPrivate ? this.state.privateMessageRef : this.state.messageRef;
  };

  render() {
    return (
      <div className="ui segment" style={{ flexGrow: 1 }}>
        <Comment.Group>
          {this.state.messages.map((message, index) => {
            return (
              <Comment key={index}>
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
