import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`${classPrefix}-released-question`}>Question</div>;
  }
}

export default Question;
