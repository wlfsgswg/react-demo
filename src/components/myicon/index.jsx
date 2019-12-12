import React, { Component } from "react";
import BaseIcon from "./../BaseIcon/index.jsx";

class MyIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BaseIcon style={{ fontSize: "20px" }} {...this.props} />;
  }
}

export default MyIcon;
