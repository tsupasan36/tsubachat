import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import firebase from "../Firebase";
import { connect } from "react-redux";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageRef: firebase.database().ref("messages"),
    };
  }

  handleMassage = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmitMessage = (e) => {
    this.state.messageRef
      .child(this.props.channel.currentChannel.id)
      .push()
      .set(this.createMessage())
      .then(() => {
        console.log("success");
        this.setState({ message: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  createMessage = () => {
    const newMessage = {
      content: this.state.message,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.props.user.user.uid,
        name: this.props.user.user.displayName,
        avatar: this.props.user.user.photoURL,
      },
    };
    return newMessage;
  };

  handleSubmitImage = (e) => {
    this.setState({ image: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <Input
          placeholder="Enter Your Message"
          label={<Button icon="plus" />}
          labelPosition="left"
          fluid
          onChange={this.handleMassage}
        />
        <Button.Group fluid style={{ marginTop: "10px" }}>
          <Button
            icon="plus"
            labelPosition="left"
            content="Add Reply"
            color="orange"
            onClick={this.handleSubmitMessage}
          />
          <Button
            content="Upload image"
            color="teal"
            onClick={this.handleSubmitImage}
          />
        </Button.Group>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  channel: state.channel,
  user: state.user,
});

export default connect(mapStateToProps, null)(MessageForm);
