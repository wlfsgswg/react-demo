import { Home, Login, Goods, Slider } from './container'
const router = [
    {
        path: '/login',
        component: Login
    }, {
        component: Slider,
        routes: [
            {
                path: '/home',
                component: Home
            }, {
                path: '/goods',
                component: Goods
            }
        ]
    }
];
module.exports = {
    router,
    defaultRoute: router[1].routes[0]
};