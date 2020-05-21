import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";

class MessageForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <Input
          placeholder="Enter Your Message"
          label={<Button icon="plus" />}
          labelPosition="left"
          fluid
        />
        <Button.Group fluid style={{ marginTop: "10px" }}>
          <Button
            icon="plus"
            labelPosition="left"
            content="Add Reply"
            color="orange"
          />
          <Button content="Upload image " color="teal" />
        </Button.Group>
      </div>
    );
  }
}

export default MessageForm;
