import React, { Component } from 'react';
import './less/iconfont.less';
import { Home } from './container';

export default class App extends Component {
    render() {
        return (
            <div>
                <i className="iconfont icon-jinatou"></i>
                <Home />
            </div>
        )
    }
}
