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
    console.log(this.props);
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
