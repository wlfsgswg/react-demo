import { BaiDu, TtService, TtDiary } from './index.js';
const menu = [
    {
        name: '我的百家',
        icon: 'mail',
        route: '/myself',
        children: null,
        component: BaiDu
    }, {
        name: '头条',
        icon: 'mail',
        route: '/toutiao',
        children: [
            {
                name: '头条服务',
                icon: 'mail',
                route: '/toutiao/service',
                component: TtService
            }, {
                name: '头条日记',
                icon: 'mail',
                route: '/toutiao/diary',
                component: TtDiary
            }
        ]
    }
];
// 路由前边只加斜杠就行，不要加./
export default menu;