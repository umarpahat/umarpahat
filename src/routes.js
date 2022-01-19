import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "react-input-range/lib/css/index.css";
import "./style.css";
import "./App.css";

import Error from "./pages/Error";
import HomePage from "./pages/HomePage";

import NotFoundPage from "./pages/NotFoundPage";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default Routes;
