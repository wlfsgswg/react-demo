import React, { Component } from 'react';
import { Button } from 'antd';
import { Link,withRouter } from 'react-router-dom';
import axios from 'axios';
class Slider extends Component {
    componentDidMount() {
        // axios.get('/api/global.json')
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     });
        console.log(this)
        if(!localStorage.getItem('userName')) this.props.history.push('./login')
    }
    render() {
        return (
            <div className="wlf-slider">
                <p>我是silider</p>
                <Link to="./home">
                    <Button >去home</Button>
                </Link>
                <Link to="./goods"> 
                    <Button>去goods</Button>
                </Link>
                <Link to="./">
                    <Button>登陆页</Button>
                </Link>
            </div>
        )
    }
}

export default withRouter(Slider);