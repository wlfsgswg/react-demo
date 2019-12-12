import React, { Component } from "react";
import { classPrefix } from "./../../const/index.js";
import { menuItem } from "./../../Router/routes.js";
import "./index.less";

export default class MenuLeft extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${classPrefix}-component-menuleft`}>
        <div className={`${classPrefix}-component-menuleft-content`}>left</div>
      </div>
    );
  }
}
