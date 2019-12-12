import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Atlas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`${classPrefix}-released-atlas`}>Atlas</div>;
  }
}

export default Atlas;
