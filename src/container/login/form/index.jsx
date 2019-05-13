
import React, { Component } from "react";
import {
    Form, Icon, Input, Button, Checkbox, message
} from 'antd';
import { withRouter } from 'react-router-dom';

import "./style.less";

class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { userName, password, remember } = values;
                if (userName == "adminWlf" && password == "1") {
                    localStorage.setItem("userName", remember ? "adminWlf" : "");
                    //跳转首页
                    this.props.history.push('/');
                } else {
                    message.error('用户名或密码错误')
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="wlf-login-form">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" size="large" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" size="large" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className="login-form-forgot" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2496436621&site=qq&menu=yes">获取账号</a>
                        <Button type="primary" htmlType="submit" className="login-form-button" size="large">登陆</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default withRouter(WrappedNormalLoginForm);
