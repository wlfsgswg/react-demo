import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Dynamic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`${classPrefix}-released-dynamic`}>Dynamic</div>;
  }
}

export default Dynamic;
