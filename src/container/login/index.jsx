import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import LogoImage from "./../../image/logo.jpg";
class Login extends Component {
  render() {
    return (
      <div className="wlf-home">
        <Link to="./slider">
          <Button type="primary">登陆</Button>
        </Link>
        <img src={LogoImage} alt="" />
      </div>
    );
  }
}

export default Login;
