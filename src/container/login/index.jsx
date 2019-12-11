import React, { Component } from "react";
import "./style.less";
import ReactImage from "././../../image/react2.jpeg";
import LoginForm from "./form/index.jsx";
class Login extends Component {
  render() {
    return (
      <div className="wlf-login">
        <div className="wlf-login-top">
          <div className="clearfix wlf-login-top-title">
            <div className="l-left left p-r-15">
              <img src={ReactImage} alt="" />
            </div>
            <div className="r-right right">
              <div>React Demo</div>
            </div>
          </div>
          <div className="c666">
            React Demo 是西湖区最具影响力的 Web 设计规范
          </div>
        </div>
        <div className="wlf-login-content">
          <LoginForm />
        </div>
        <div className="wlf-login-bottom c999">
          <div className="wlf-login-bottom-flex">
            <span>帮助</span>
            <span className="p-l-20 p-r-20">隐私</span>
            <span>条款</span>
          </div>
          <div>
            Copyright&nbsp;
            <i
              className="iconfont icon-Copyright"
              style={{ fontSize: "14px" }}
            ></i>
            &nbsp;2019 wlf前端技术出品
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
