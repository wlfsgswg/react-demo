import React, { Component } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
import { add, min } from "./../../../util";
class BaiDu extends Component {
  render() {
    return <div className="wlf-baijia">{add(1, 2)}</div>;
  }
}

export default withRouter(BaiDu);
