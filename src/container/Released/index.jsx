import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

class Released extends Component {
  render() {
    return (
      <div className="wlf-home">
        <div className="p-b-20">Released</div>
        <div>{renderRoutes(this.props.route.routes)}</div>
      </div>
    );
  }
}

export default Released;
