import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { Link, withRouter } from "react-router-dom";
import { classPrefix } from "./../../const/index.js";
import { routeMatching } from "./../../util/index.js";
import { Layout } from "antd";
import "./index.less";
const { Sider, Content } = Layout;
class RenderRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: ""
    };
  }

  componentDidMount() {
    const { menu } = this.props;
    const list = menu.list;
    let focus = "";
    const path = routeMatching(this.props.location.pathname, 2);
    list.map(it => {
      if (it.path === path) focus = it.path;
    });
    if (!focus) focus = list[0].path;
    this.setState({ focus });
  }

  render() {
    const { menu, router } = this.props;
    const { focus } = this.state;
    const list = menu.list;

    return (
      <div className={`${classPrefix}-component-render`}>
        <div className={`${classPrefix}-component-render-content`}>
          <Layout>
            <Sider className="render-sider">
              <div className="render-sider-content">
                <div className="render-sider-content-title">{menu.title}</div>
                <div className="render-sider-content-item">
                  {list.map((it, i) => {
                    return (
                      <Link to={it.path} key={it.path}>
                        <div
                          className={`${focus === it.path ? "active" : ""}`}
                          onClick={() => this.setState({ focus: it.path })}
                        >
                          {it.title}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Sider>
            <Layout>
              <Content className="render-content">
                {renderRoutes(router)}
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}

export default withRouter(RenderRouter);
