import React, { Component } from 'react';
import './style.less';
import { Button } from 'antd';
class Root extends Component {
    render() {
        return (
            <div className="wlf-root">
                <Button type="primary">Primary</Button>
            </div>
        )
    }
}

export default Root;