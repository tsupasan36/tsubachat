import React, { Component } from "react";
import { Button, Header, Icon, Modal, Input } from "semantic-ui-react";
import "./styles/PublicChannel.css";

class PublicChannels extends Component {
  render() {
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
            />
            <Input
              label={<Button content="About the Channel" />}
              labelPosition="left"
              fluid
              style={{ marginBottom: "15px" }}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted>
              <Icon name="checkmark" /> Add
            </Button>
            <Button inverted color="red">
              <Icon name="remove" />
              Red
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default PublicChannels;
