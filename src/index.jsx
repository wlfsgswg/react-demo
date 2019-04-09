import React, { Component } from 'react';
import './less/iconfont.less';
import Root from './container/Root.jsx';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

export default class App extends Component {
    render() {
        return (
            <LocaleProvider locale={zh_CN}><Root /></LocaleProvider>
        )
    }
}
