import React, { useContext } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./main.css";
import { StatusContext } from "./components/StatusContext";
import Customers from "./components/Customers";
import Statistics from "./components/Statistics";
import Tasks from "./components/Tasks";
import DashboardS from "./components/DashboardS";
import Workers from "./components/Workers";

function App() {
  const user = useContext(StatusContext);
  return (
    <Router
      basename={process.env.PUBLIC_URL}
      path={process.env.PUBLIC_URL + "/"}
    >
      <Route path="/" exact component={Login} />
      <Route path="/home">
        {user.admin === true && <Dashboard />}
        {!user.admin && <Redirect to="/" />}
        {user.admin === "guest" && <Dashboard />}
      </Route>
      <Route path="/home/dashboard" component={DashboardS}></Route>
      <Route path="/home/customers" component={Customers}></Route>
      <Route path="/home/statistics" component={Statistics}></Route>
      <Route path="/home/employees" component={Workers}></Route>
      <Route path="/home/tasks" component={Tasks}></Route>
    </Router>
  );
}

export default App;
