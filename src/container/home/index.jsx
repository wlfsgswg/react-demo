import React, { Component } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
import { Button } from "antd";

class Home extends Component {
  render() {
    return (
      <div className="wlf-home">
        <div className="p-b-20">
          <Button onClick={() => this.props.history.push("/login")}>
            跳转登陆页
          </Button>
        </div>
        <div>
          <Button onClick={() => this.props.history.push("/login/st")}>
            orther
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
