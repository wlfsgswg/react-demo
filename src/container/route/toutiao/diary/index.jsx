import React, { Component } from 'react';
import './style.less';
import { withRouter } from 'react-router-dom';

class TtDiary extends Component {
    render() {
        return (
            <div className="wlf-notfound">
                头条日记
            </div>
        )
    }
}

export default withRouter(TtDiary);