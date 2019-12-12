import React, { Component } from "react";
import { classPrefix } from "./../../const/index.js";
import { Link, withRouter } from "react-router-dom";
import MyIcon from "./../MyIcon/index.jsx";
import "./index.less";
const menu = [
  {
    key: 0,
    icon: "icon-shouye",
    text: "首页",
    path: "/home"
  },
  {
    key: 1,
    icon: "icon-fabu",
    text: "发布",
    path: "/released"
  },
  {
    key: 2,
    icon: "icon-tiwen",
    text: "问答",
    path: "/question"
  },
  {
    key: 3,
    icon: "icon-gongju",
    text: "工具",
    path: "/tool"
  },
  {
    key: 4,
    icon: "icon-fenxi",
    text: "分析",
    path: "/analysis"
  },
  {
    key: 5,
    icon: "icon-iconfontwanyouxi",
    text: "互动",
    path: "/interaction"
  },
  {
    key: 6,
    icon: "icon-shouyi",
    text: "收益",
    path: "/profit"
  },
  {
    key: 7,
    icon: "icon-kaifa",
    text: "开发",
    path: "/develop"
  }
];

const focusFromKey = e => {
  let focus;
  menu.map(it => {
    if (it.path.split("/")[1] === e) focus = it.key;
  });
  return focus;
};

class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: props.focus | ""
    };
  }

  componentDidMount() {
    const path = this.props.location && this.props.location.pathname;
    const arr = path.split("/");
    const focus = focusFromKey(arr[1]);
    this.setState({ focus });
  }

  render() {
    const { focus } = this.state;
    return (
      <div className={`${classPrefix}-component-menuleft`}>
        <div className={`${classPrefix}-component-menuleft-content`}>
          <div className="top-img">
            <div className="img">
              <MyIcon type="icon-baijiahao" style={{ fontSize: "37px" }} />
            </div>
          </div>
          <div className="content">
            {menu.map(it => {
              return (
                <Link key={it.key} to={it.path}>
                  <div
                    className={` ${
                      focus === it.key ? "active" : ""
                    } content-item `}
                    onClick={() => this.setState({ focus: it.key })}
                  >
                    <div>
                      <MyIcon type={it.icon} />
                    </div>
                    <div className="text">{it.text}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MenuLeft);
