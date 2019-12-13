import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`${classPrefix}-admin-content`}>Content</div>;
  }
}

export default Content;
