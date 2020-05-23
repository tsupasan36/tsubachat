import React, { Component } from "react";

import { Route, Switch, withRouter } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { setUser } from "../../src/actions";
import { connect } from "react-redux";
import firebase from "../Firebase";

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/dashboard");
      } else {
        this.props.history.push("/login");
      }
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

const RouterWithAuth = withRouter(connect(null, { setUser })(App));

export default RouterWithAuth;
