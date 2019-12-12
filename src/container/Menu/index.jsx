import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { classPrefix } from "./../../const/index.js";
export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`${classPrefix}-menu`}>
        <div>Menu</div>
        <div>{renderRoutes(this.props.route.routes)}</div>
      </div>
    );
  }
}
