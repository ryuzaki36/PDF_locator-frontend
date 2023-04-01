import React from "react";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import SignIn from "./components/SignIn";


const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path={'/signin'} component={SignIn}></Route>
    </Switch>
  </BrowserRouter>
}

export default App;