import React, { Component } from "react";
import "./style.less";
import ReactImage from '././../../image/react2.jpeg';
import LoginForm from './form/index.jsx';
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
          <div className="c666">React Demo 是西湖区最具影响力的 Web 设计规范</div>
        </div>
        <div className="wlf-login-content">
          <LoginForm />
        </div>
        <div className="wlf-login-bottom" >
        </div>
      </div>
    );
  }
}

export default Login;
