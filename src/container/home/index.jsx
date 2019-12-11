import React, { Component } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return <div className="wlf-home">home</div>;
  }
}

export default withRouter(Home);
