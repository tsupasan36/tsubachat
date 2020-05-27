import React, { Component } from "react";
import { Accordion, Icon, Header, Segment, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import "./styles/metapanel.css";

class MetaPanel extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Segment
        className="meta-container"
        loading={!this.props.channel.currentChannel}
      >
        <Header as="h3" attached="top" style={{ margin: " 0 12px" }}>
          About #{" "}
          {this.props.channel.currentChannel &&
            this.props.channel.currentChannel.name}
        </Header>
        <Accordion
          styled
          className="ap-container"
          attached="true"
          style={{ margin: " 0 12px" }}
        >
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown " />
            <Icon name="info" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            {this.props.channel.currentChannel &&
              this.props.channel.currentChannel.details}
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            What kinds of dogs are there?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              There are many breeds of dogs. Each breed varies in size and
              temperament. Owners often select a breed of dog that they find to
              be compatible with their own lifestyle and desires from a
              companion.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Icon name="pencil" />
            Created By:
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Header as="h3">
              <Image
                src={
                  this.props.channel.currentChannel &&
                  this.props.channel.currentChannel.createdBy.avatar
                }
              />
              {this.props.channel.currentChannel &&
                this.props.channel.currentChannel.createdBy.name}
            </Header>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channel: state.channel,
  };
};

export default connect(mapStateToProps)(MetaPanel);
