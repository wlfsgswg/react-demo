import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, NotFound } from "./index";

class Root extends Component {
  render() {
    return (
      <div className="wlf-root">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/ome/st" exact component={Home} />
            <Route path="/ty" exact component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Root;
