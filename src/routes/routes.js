// 这里导出的是路由配置，用于路由代码分隔
import lazyLoad from './lazyLoad';
export const Routes = [
    {
        exact: true,
        path: '/',
        component: lazyLoad(() => import('../container/app'))
    },
    {
        path: '/a-page',
        component: lazyLoad(() => import('../container/aPage'))
    },
    {
        path: '/b-page',
        component: lazyLoad(() => import('../container/bPage'))
    },
    {
        path: '/c-page',
        component: lazyLoad(() => import('../container/cPage'))
    }
];