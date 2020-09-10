/* eslint-disable no-unused-vars */

export default {
    getStoreName({ dispath, commit }){
        commit('GET_STORE_NAME');
    },

    setStoreName({ dispath, commit }, params){
        commit('SET_STORE_NAME', params);
    }
};
