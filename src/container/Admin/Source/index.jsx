import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Source extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`${classPrefix}-admin-source`}>Source</div>;
  }
}

export default Source;
