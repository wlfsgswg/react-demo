import React, { Component } from 'react';
import './style.less';
import { withRouter } from 'react-router-dom';

class BaiDu extends Component {
    render() {
        return (
            <div className="wlf-notfound">
                百度
            </div>
        )
    }
}

export default withRouter(BaiDu);