import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, Slider, NotFound } from "./index";

class Root extends Component {
  render() {
    return (
      <div className="wlf-root">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" component={Slider} />
            <Route path="/home" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Root;