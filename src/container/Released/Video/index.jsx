import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Video extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`${classPrefix}-released-video`}>Video</div>;
  }
}

export default Video;
