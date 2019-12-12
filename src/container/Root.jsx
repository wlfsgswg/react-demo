import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./../Router/routes.js";

class Root extends Component {
  render() {
    return (
      <div className="wlf-root">
        <Router>{renderRoutes(routes)}</Router>
      </div>
    );
  }
}

export default Root;
