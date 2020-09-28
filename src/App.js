import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProjectState from "./context/ProjectState";
import TaskState from "./context/tasks/TaskState";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import "./style.css";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Project from "./components/project/Project";
import authToken from "./config/authToken";
import PrivateRoute from './components/route/PrivateRoute';
const token = localStorage.getItem('token');
if (token) {
  authToken(token);
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <PrivateRoute exact path="/project" component={Project}></PrivateRoute>
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
