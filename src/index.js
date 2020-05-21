import React from "react";
import ReactDOM from "react-dom";
import App from "./compornents/App";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
