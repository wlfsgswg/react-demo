import React, { Component } from 'react';
import './style.less';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div className="wlf-notfound">
                找不到你想要的页面
            </div>
        )
    }
}

export default withRouter(NotFound);