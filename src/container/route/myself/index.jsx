import React, { Component } from 'react';
import './style.less';
import { withRouter } from 'react-router-dom';

class MySelf extends Component {
    render() {
        return (
            <div className="wlf-notfound">
                自己的页面
            </div>
        )
    }
}

export default withRouter(MySelf);