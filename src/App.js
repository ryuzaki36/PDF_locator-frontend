import React from "react";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/dashboard";

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path={'/signin'} component={SignIn}></Route>
      <Route exact path={'/signup'} component={SignUp}></Route>
      <Route exact path="/dashboard" component={Dashboard} ></Route>
    </Switch>
  </BrowserRouter>
}

export default App;