import React, { Component } from "react";
import "./less/base.less";
import Root from "./container/Root.jsx";
import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";

export default class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zh_CN}>
        <Root />
      </ConfigProvider>
    );
  }
}
