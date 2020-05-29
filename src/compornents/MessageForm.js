import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      image: "",
    };
  }

  handleMassage = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmitMessage = (e) => {
    this.setState({ message: "" });
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

export default MessageForm;
