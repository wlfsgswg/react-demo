import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";
import { getDemo } from "./../../../util/axios.js";
class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getDemo();
  }

  render() {
    return <div className={`${classPrefix}-released-article`}>Article</div>;
  }
}

export default Article;
