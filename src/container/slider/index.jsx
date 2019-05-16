import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { withRouter, Switch, Route } from 'react-router-dom';
import { NotFound } from './../index.js'
import { LeftMenu } from './../../components/index.js';
import routeMenu from './../route/routeMenu.js';
import './style.less';

class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    componentDidMount() {
        if (!localStorage.getItem('userName')) this.props.history.push('./login')
    }

    toggleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <div className="wlf-slider">
                <div className="wlf-slider-top">
                    <div className="wlf-slider-top-button">
                        <Button type="primary" onClick={() => this.toggleCollapsed()} style={{ marginBottom: 16 }}>
                            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </Button>
                    </div>
                </div>
                <div className="wlf-slider-left">
                    <div className={!collapsed ? "wlf-slider-left-out" : "wlf-slider-left-out wlf-slider-left-out-menu-fold"}>
                        <LeftMenu collapsed={collapsed} />
                    </div>
                </div>
                <div className={collapsed ? "wlf-slider-container wlf-slider-container-menu-fold" : "wlf-slider-container"}>
                    <div className="wlf-slider-container-route">
                        <Switch>
                            {
                                routeMenu.length != 0 && routeMenu.map(item => {
                                    if (item.children) {
                                        return item.children.map(it => {
                                            return (
                                                <Route key={it.route} path={it.route} exact component={it.component} />
                                            )
                                        })
                                    } else {
                                        return (
                                            <Route key={item.route} path={item.route} exact component={item.component} />
                                        )
                                    }
                                })
                            }
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Slider);