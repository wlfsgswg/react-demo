import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

class Qaa extends Component {
  render() {
    return (
      <div className="wlf-home">
        <div className="p-b-20">Qaa</div>
        <div>{renderRoutes(this.props.route.routes)}</div>
      </div>
    );
  }
}

export default Qaa;
