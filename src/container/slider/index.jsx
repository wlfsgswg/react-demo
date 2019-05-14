import React, { Component } from 'react';
import { Button, Menu, Icon, Row, Col } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './style.less';
const SubMenu = Menu.SubMenu;

class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    componentDidMount() {
        console.log(this)
        if (!localStorage.getItem('userName')) this.props.history.push('./login')
    }

    toggleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="wlf-slider">
                <Row type="flex">
                    <Col span={4}>
                        <div >
                            <Button type="primary" onClick={() => this.toggleCollapsed()} style={{ marginBottom: 16 }}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                            >
                                <Menu.Item key="1">
                                    <Icon type="pie-chart" />
                                    <span>Option 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="desktop" />
                                    <span>Option 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="inbox" />
                                    <span>Option 3</span>
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
                        </div>
                    </Col>
                    <Col span={20}>
                        <div className="wlf-slider-container"></div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Slider);