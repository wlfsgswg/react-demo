import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import { Provider } from 'react-redux';
// import { Home, Login, Goods, Slider } from './../container';

import { router, defaultRoute } from './../routes.js';

class Root extends Component {
    render() {
        return (
            <div className="wlf-root">
                {/* <Provider > */}
                <BrowserRouter>
                    {renderRoutes(router, { defaultRoute })}
                </BrowserRouter>
                {/* </Provider> */}
            </div>
        )
    }
}

export default Root;