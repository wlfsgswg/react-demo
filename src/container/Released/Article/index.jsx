import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={`${classPrefix}-released-article`}>Article</div>;
  }
}

export default Article;
