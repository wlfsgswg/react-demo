import React, { Component } from "react";
import { classPrefix } from "./../../../const/index.js";
import { connect } from "react-redux";
import { Button } from "antd";
class Atlas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className={`${classPrefix}-released-atlas`}>
        <div>Atlas</div>
        <div>{this.props.hi}</div>
        <Button onClick={this.props.handleChange}>点击</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    hi: state.mydemo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChange: () => dispatch({ type: "CHANGE-DEMO", value: 1 })
  };
};

const menu = connect(mapStateToProps, mapDispatchToProps)(Atlas);
export default menu;
