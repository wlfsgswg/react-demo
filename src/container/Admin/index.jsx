import React, { Component } from "react";
import { admin } from "./../../Router/menu.js";
import { RenderRouter } from "./../../components/index.js";
class Admin extends Component {
  render() {
    const { route } = this.props;
    return <RenderRouter menu={admin} router={route.routes} />;
  }
}

export default Admin;
