import React from "react";
import { Dropdown } from "semantic-ui-react";
import firebase from "firebase";

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.
const handleLogout = () => {
  firebase.auth().signOut().then();
};

const DropdownExampleDropdown = () => (
  <Dropdown>
    <Dropdown.Menu>
      <Dropdown.Item text="Change Avatar" />
      <Dropdown.Divider />
      <Dropdown.Item text="Logout" onClick={handleLogout} />
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownExampleDropdown;
