import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
import routeMenu from './../../container/route/routeMenu.js'

class LeftMenu extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this)
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