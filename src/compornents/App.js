import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
