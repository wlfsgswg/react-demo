import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Compilation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${classPrefix}-released-compilation`}>Compilation</div>
    );
  }
}

export default Compilation;
