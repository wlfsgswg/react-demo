import React, { Component } from 'react';
import './style.less';
import { Button } from 'antd';
class Home extends Component {
    render() {
        return (
            <div className="wlf-home">
                <Button type="primary">Primary</Button>
            </div>
        )
    }
}

export default Home;