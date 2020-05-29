import React from "react";
import ReactDOM from "react-dom";
import RouterWithAuth from "./compornents/App";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "./reducers";

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RouterWithAuth />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
