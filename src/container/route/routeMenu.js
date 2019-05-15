const menu = [
    {
        name: '百度',
        icon: 'mail',
        route: '/baijia',
        children: null
    }, {
        name: '头条',
        icon: 'mail',
        route: '/toutiao',
        children: [
            {
                name: '头条服务',
                icon: 'mail',
                route: '/toutiao/service',
            }, {
                name: '头条日记',
                icon: 'mail',
                route: '/toutiao/diary',
            }
        ]
    }
];
// 路由前边只加斜杠就行，不要加./
export default menu;