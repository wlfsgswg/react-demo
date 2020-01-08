import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { classPrefix } from "./../../const/index.js";
import { connect } from "react-redux";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "home"
    };
  }
  componentDidMount() {
    const obj = new Object({ name: "王六锋", sex: "男", age: "27" });
    Object.defineProperty(obj, "st", {
      configurable: false,
      enumerable: false,
      value: "任意类型的值",
      writable: false
    });

    // Object.defineProperty(obj, "st", {
    //   configurable: true,
    //   enumerable: true,
    //   value: "任意类型的值",
    //   writable: true
    // });
    // obj.st = "1";
    // delete obj.st;
    console.log(obj);
    for (let i in obj) {
      console.log(i, obj[i]);
    }
  }
  render() {
    const { hi } = this.props;
    return (
      <div className={`${classPrefix}-home`}>
        <div className="p-b-20">{hi}</div>
        <div>{renderRoutes(this.props.route.routes)}</div>
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

const HomeList = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeList;
