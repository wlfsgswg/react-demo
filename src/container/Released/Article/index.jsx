import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";
// import { getDemo } from "./../../../util/axios.js";
import { connect } from "react-redux";
import { Button } from "antd";

class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // getDemo();
  }

  render() {
    return (
      <div className={`${classPrefix}-released-article`}>
        <div>Article</div>
        <div>{this.props.hi}</div>
        <div>
          <Button
            onClick={() => {
              this.props.myOverClick();
            }}
          >
            点击
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hi: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    myOverClick: () => {
      dispatch({ type: "SET_VISIBILITY_FILTER", filter: "哈哈哈哈哈哈" });
    }
  };
};

const ArticleList = connect(mapStateToProps, mapDispatchToProps)(Article);

export default ArticleList;
