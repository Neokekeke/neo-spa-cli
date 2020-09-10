import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
    storeName: 'app store'
};

export default {
    state,
    actions,
    getters,
    mutations,
    modules: {}
};