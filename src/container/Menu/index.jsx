import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { classPrefix } from "./../../const/index.js";
import { MenuLeft } from "./../../components/index.js";
import { Layout, Row, Col } from "antd";
import "./index.less";
const { Sider, Content, Header, Footer } = Layout;

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`${classPrefix}-menu`}>
        <Layout>
          <Sider className="menu-sider">
            <MenuLeft />
          </Sider>
          <Layout>
            <Header className="menu-header">Header</Header>
            <Content className="menu-content">
              {renderRoutes(this.props.route.routes)}
            </Content>
            {/* <Footer className="menu-footer">Footer</Footer> */}
          </Layout>
        </Layout>
      </div>
    );
  }
}
