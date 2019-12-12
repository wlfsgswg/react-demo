import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { classPrefix } from "./../../const/index.js";
import { Layout } from "antd";
import "./index.less";
const { Sider, Content } = Layout;
class RenderRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { menu, router } = this.props;
    console.log(menu, router);
    // renderRoutes(router)
    return (
      <div className={`${classPrefix}-component-render`}>
        <div className={`${classPrefix}-component-render-content`}>
          <Layout>
            <Sider className="render-sider">Sider</Sider>
            <Layout>
              <Content className="render-content">Content</Content>
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}

export default RenderRouter;
