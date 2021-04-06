import Vue from 'vue';
import router from '../router';
import App from './App.vue';
import store from '../store';

import './grid.less';

// 全局路由守卫
router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    // console.log('to', to);
    // console.log('from', from);

    if (!to.meta.token && to.path !== '/c-page'){
        to.meta.token = 'isAuthed';
        next();
    } else {
        next('/home');
    }

    // if (to.path == '/home'){
    //     next();
    // } else if (to.path == '/c-page'){
    //     next({
    //         path: '/home',
    //         replace: true
    //     });
    // } else {
    //     next();
    // }
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
