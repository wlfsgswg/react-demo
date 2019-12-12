import React, { Component } from "react";
import { released } from "./../../Router/menu.js";
import { RenderRouter } from "./../../components/index.js";
class Released extends Component {
  render() {
    const { route } = this.props;
    return <RenderRouter menu={released} router={route.routes} />;
  }
}

export default Released;
