import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StatusProvider } from "./components/StatusContext";
import { HashRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <StatusProvider>
      <App />
    </StatusProvider>
  </Router>,
  document.getElementById("root")
);
