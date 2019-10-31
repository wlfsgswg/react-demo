import { BaiDu, TtService, TtDiary } from './index.js';
const menu = [
    {
        name: '百度',
        icon: 'icon-751bianjiqi_baiduditu',
        route: '/myself',
        children: null,
        component: BaiDu
    }, {
        name: '分析',
        icon: 'icon-fenxi',
        route: '/analyse',
        children: [
            {
                name: '内容分析',
                icon: 'icon-neirong',
                route: '/analyse/content',
                component: TtService
            }, {
                name: '粉丝分析',
                icon: 'icon-fensi',
                route: '/analyse/fans',
                component: TtDiary
            }, {
                name: '百度',
                icon: 'icon-tubiao103',
                route: '/analyse/index',
                component: TtDiary
            }
        ]
    }
];
// 路由前边只加斜杠就行，不要加./
export default menu;