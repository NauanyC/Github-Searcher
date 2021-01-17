import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";
/*
export interface RoutesProps {} */

const Routes: React.SFC /* <RoutesProps> */ = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repositories/:repository+" exact component={Repository} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
