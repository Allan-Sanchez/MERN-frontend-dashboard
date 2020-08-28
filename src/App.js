import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Proyect from "./components/project/Proyect"
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/proyect" component={Proyect}></Route>
      </Switch>
    </Router>
  );
}

export default App;
