import React from "react"

import { Route, Switch } from "react-router-dom";
import TestBaby from "./components/TestBaby"

function Routes() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={TestBaby} />
          </Switch>
          </>
    )
}

export default Routes;
