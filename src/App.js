import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Project from "./components/project/Project"
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/project" component={Project}></Route>
      </Switch>
    </Router>
  );
}

export default App;
