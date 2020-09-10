export default {
    GET_STORE_NAME(state){
        console.log('store name：', state.storeName);
    },

    SET_STORE_NAME(state, res){
        state.storeName = res;
    }
};