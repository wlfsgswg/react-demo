import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

class Profit extends Component {
  render() {
    return (
      <div className="wlf-home">
        <div className="p-b-20">Profit</div>
        <div>{renderRoutes(this.props.route.routes)}</div>
        <div>哈哈哈哈</div>
      </div>
    );
  }
}

export default Profit;
