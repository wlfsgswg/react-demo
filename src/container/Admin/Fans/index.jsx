import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Fans extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`${classPrefix}-admin-fans`}>Fans</div>;
  }
}

export default Fans;
