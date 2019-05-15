import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

export default class LeftMenu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { collapsed } = this.props;
        return (
            <Menu
                defaultSelectedKeys={['']}
                defaultOpenKeys={['']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="1">
                    <Link to='./myself'>
                        <Icon type="pie-chart" />
                        <span>百家号</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}