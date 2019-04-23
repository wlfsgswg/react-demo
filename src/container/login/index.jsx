import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./style.less";
import ReactImage from '././../../image/react2.jpeg';
class Login extends Component {
  render() {
    return (
      <div className="wlf-login">
        <div className="wlf-login-top" >
          <div className="clearfix wlf-login-top-title">
            <div className="l-left left p-r-15">
              <img src={ReactImage} alt="" />
            </div>
            <div className="r-right right">
              <div>React Demo</div>
            </div>
          </div>
        </div>
        <div className="wlf-login-content">
        </div>
        <div className="wlf-login-bottom" >
        </div>
      </div>
    );
  }
}

export default Login;
