import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "../components/Auth/SignIn";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  </Router>
);
