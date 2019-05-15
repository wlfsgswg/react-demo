import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { withRouter, Switch, Route } from 'react-router-dom';
// import { MySelf } from '../route/index.js';
// import { NotFound } from './../index.js'
import { LeftMenu } from './../../components/index.js';
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
                    <LeftMenu collapsed={collapsed} />
                </div>
                <div className={collapsed ? "wlf-slider-container wlf-slider-container-menu-fold" : "wlf-slider-container"}>
                    <div className="wlf-slider-container-route">
                        <Switch>
                            {/* <Route path="/myself" exact component={MySelf} />
                            <Route component={NotFound} /> */}
                             {/* <Route component={NotFound} />  */}
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Slider);