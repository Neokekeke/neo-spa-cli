// 这里导出的是路由配置，用于路由代码分隔
export const Routes = [
    {
        path: '/',
        component: () => import('../container/app')
    },
    {
        path: '/a-page',
        component: () => import('../container/aPage')
    },
    {
        path: '/b-page',
        component: () => import('../container/bPage')
    },
    {
        path: '/c-page',
        component: () => import('../container/cPage')
    }
];