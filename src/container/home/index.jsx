import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

class Home extends Component {
  render() {
    return (
      <div className="wlf-home">
        <div className="p-b-20">home</div>
        <div>{renderRoutes(this.props.route.routes)}</div>
      </div>
    );
  }
}

export default Home;
