import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import './style.less';
class Login extends Component {
  render() {
    return (
      <div className="wlf-login">
        <Link to="./slider">
          <Button type="primary">登陆</Button>
        </Link>
      </div>
    );
  }
}

export default Login;
