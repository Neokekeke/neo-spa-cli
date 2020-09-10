import Vue from 'vue';
import Vuex from 'vuex';
import root from './root';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        root
    }
});