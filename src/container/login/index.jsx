import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div className="wlf-home">
                <Link to='./silder'>
                    <Button type="primary">登陆</Button>
                </Link>
            </div>
        )
    }
}

export default Login;