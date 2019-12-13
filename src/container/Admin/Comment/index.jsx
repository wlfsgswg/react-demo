import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`${classPrefix}-admin-comment`}>Comment</div>;
  }
}

export default Comment;
