import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由懒加载
const Home = () => import('../container/homePage/index.vue');
const About = () => import('../container/aboutPage/index.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'about',
            path: '/about',
            component: About
        }
    ],
    scrollBehavior(to, from, savedPosition){
        if (savedPosition){
          return savedPosition;
        } else {
          return { x: 0, y: 0 };
        }
      }
});

export default router;