import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, Slider,NotFound } from "./index";

class Root extends Component {
  render() {
    return (
      <div className="wlf-root">
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Slider} />
            <Route exact path="/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;