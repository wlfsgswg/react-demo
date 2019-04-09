import React, { Component } from 'react';
import './style.less';
import { Button } from 'antd';
class Home extends Component {
    render() {
        return (
            <div className="wlf-home">
                <Button type="primary">我是home</Button>
            </div>
        )
    }
}

export default Home;