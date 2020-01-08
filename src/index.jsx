import React, { Component } from "react";
import "./theme/common.less";
import Root from "./container/Root.jsx";
import { ConfigProvider } from "antd";
console.log(9000);
export default class App extends Component {
  render() {
    return (
      <ConfigProvider>
        <Root />
      </ConfigProvider>
    );
  }
}
