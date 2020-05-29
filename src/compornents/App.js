import React, { Component } from "react";

import { Route, Switch, withRouter } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { setUser, clearUser } from "../../src/actions";
import { connect } from "react-redux";
import firebase from "../Firebase";
import { Dimmer, Loader } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.dispatch(setUser(user));
        this.props.history.push("/dashboard");
        this.setState({ isLoading: false });
      } else {
        this.props.history.push("/login");
        this.setState({ isLoading: false });
        // a clear user
        this.props.dispatch(clearUser());
      }
    });
  }

  render() {
    return this.state.isLoading === true ? (
      <Dimmer active>
        <Loader size="huge" />
      </Dimmer>
    ) : (
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

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const RouterWithAuth = withRouter(connect(null, mapDispatchToProps)(App));

export default RouterWithAuth;
