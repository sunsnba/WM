import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import App from "./App";
import Details from "./Details";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/details" component={Details} />
  </Switch>
);

export default withRouter(Routes);
