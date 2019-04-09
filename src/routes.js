import { Home, Login, Goods, Slider } from './container'
const router = [
    {
        path: '/',
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
const defaultRoute = router[1].routes[0];
export {
    router,
    defaultRoute
};