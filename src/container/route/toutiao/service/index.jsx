import React, { Component } from 'react';
import './style.less';
import { withRouter } from 'react-router-dom';

class TtService extends Component {
    render() {
        return (
            <div className="wlf-notfound">
                头条服务
            </div>
        )
    }
}

export default withRouter(TtService);