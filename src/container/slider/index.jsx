import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
class Slider extends Component {
    render() {
        return (
            <div className="wlf-home">
                <p>我是silider</p>
                <Link to="./home">
                    <Button >去home</Button>
                </Link>
                <Link to="./goods">
                    <Button>去goods</Button>
                </Link>
                <Link to="./login">
                    <Button>登陆页</Button>
                </Link>
            </div>
        )
    }
}

export default Slider;