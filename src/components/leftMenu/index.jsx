import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
import routeMenu from './../../container/route/routeMenu.js'

class LeftMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKeys: '',
            openKeys: ''
        }
    }

    componentWillMount() {
        const { location } = this.props;
        const src = location.pathname;
        routeMenu.map(item => {
            if (item.route == src) {
                this.setState({ selectedKeys: item.route, openKeys: '' })
            } else {
                if (item.children) (item.children.map(it => {
                    if (it.route == src) this.setState({ selectedKeys: it.route, openKeys: item.route })
                }))
            }
        })
    }

    render() {
        const { collapsed } = this.props;
        const { selectedKeys, openKeys } = this.state;

        return (
            <Menu
                defaultSelectedKeys={[selectedKeys]}
                defaultOpenKeys={[openKeys]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                {
                    routeMenu.length != 0 && routeMenu.map(item => {
                        if (!item.children) {
                            return (
                                <MenuItem key={item.route}>
                                    <Link to={item.route}>
                                        <Icon type={item.icon} />
                                        <span>{item.name}</span>
                                    </Link>
                                </MenuItem>
                            )
                        } else {
                            return (
                                <SubMenu
                                    key={item.route}
                                    title={
                                        <span>
                                            <Icon type={item.icon} />
                                            <span>{item.name}</span>
                                        </span>
                                    }
                                >
                                    {
                                        item.children.map(it => (
                                            <MenuItem key={it.route}>
                                                <Link to={it.route}>
                                                    <Icon type={it.icon} />
                                                    <span>{it.name}</span>
                                                </Link>
                                            </MenuItem>
                                        ))
                                    }
                                </SubMenu>
                            )
                        }
                    })
                }
            </Menu>
        )
    }
}
export default withRouter(LeftMenu)