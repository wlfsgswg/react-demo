import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { classPrefix } from "./../../const/index.js";
import { MenuLeft } from "./../../components/index.js";
import { Layout } from "antd";
import "./index.less";
const { Sider, Content, Header, Footer } = Layout;

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`${classPrefix}-menu`}>
        {/* <div className="menu-left">
          <MenuLeft />
        </div>
        <div className="menu-right">
          {renderRoutes(this.props.route.routes)}
        </div> */}
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
