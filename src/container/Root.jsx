import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, Slider } from "./index";

class Root extends Component {
  render() {
    return (
      <div className="wlf-root">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/slider" component={Slider} />
            <Route path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;
