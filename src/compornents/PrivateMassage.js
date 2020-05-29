import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import firebase from "firebase";
import { connect } from "react-redux";
import { changeChannel, setPrivateChannel } from "../actions";

import "./styles/privatemessage.css";

class PrivateMassage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersRef: firebase.database().ref("users"),
      users: [],
      activeChannel: "",
    };
  }

  componentDidMount() {
    this.addUsersListeners();
  }

  addUsersListeners = () => {
    let loadedUsers = [];
    this.state.usersRef.on("child_added", (user) => {
      if (user.key !== this.props.user.user.uid) {
        let addedUser = user.val();

        addedUser["uid"] = user.key;
        addedUser["status"] = "offline";

        loadedUsers.push(addedUser);
        this.setState({ users: loadedUsers });
      }
    });
  };

  changeChannel = (user) => {
    const channelId = this.getChannelId(user.uid);
    const channnelData = {
      id: channelId,
      name: user.name,
    };
    this.props.dispatch(changeChannel(channnelData));
    this.props.dispatch(setPrivateChannel(true));
    this.setState({ activeChannel: user.uid });
  };

  getChannelId = (userId) => {
    const currentUserId = this.props.user.uid;

    return userId < currentUserId
      ? `${userId}/${currentUserId}`
      : `${currentUserId}/${userId}`;
  };

  render() {
    return (
      <div style={{ color: "darkgray", margin: "15px" }}>
        <div style={{ margin: "10px 0" }}>
          <i className=" envelope icon">DIRECT MESSAGES (4)</i>
        </div>
        <Menu text vertical>
          {this.state.users.map((user, index) => {
            return (
              <Menu.Item
                key={index}
                style={{ color: "darkgray" }}
                onClick={() => this.changeChannel(user)}
              >
                @ {user.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateMassage);
