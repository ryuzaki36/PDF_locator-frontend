import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/dashboard";
import History from "./components/history";
import PdfViewer from "./components/viewpdf";

const LoginCheck = () => {
  const token = localStorage.getItem("token");
  const loggedIn = token ? true : false;
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) history.push("/dashboard");
    else history.push("/signin");
  }, []);
  return <></>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/signin"} component={SignIn}></Route>
        <Route exact path={"/signup"} component={SignUp}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/history" component={History}></Route>
        <Route exact path={"/"} component={LoginCheck}></Route>
        <Route exact path="/pdf" component={PdfViewer}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
