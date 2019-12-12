import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Menu</div>
        <div>{renderRoutes(this.props.route.routes)}</div>
      </div>
    );
  }
}
