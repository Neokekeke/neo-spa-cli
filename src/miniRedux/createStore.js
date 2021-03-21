// 这里是store初始化的地方
// createStore(reducer, initialState, applyMiddleWare)
import ACTION_TYPES from './utils/actionTypes';

const createStore = function(reducer, initialState = {}, enhancer) {
    if (typeof initialState === 'function'){
        enhancer = initialState;
        initialState = undefined;
    }

    // 如果有中间件，从中间件改写了store，返回新store，新dispatch
    if(enhancer) {
        const newCreateStore = enhancer(createStore);
        return newCreateStore(reducer, initialState);
    }
      
    // 初始化state
    let state = initialState;
    let listeners = [];

    // 订阅store的方法
    function subscribe(listener) {
        listeners.push(listener);
        // 退订
        return function unsubscribe() {
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }

    // 派发action改变state的方法，action是一个plain对象，包含一个修改state的type或其余payload
    function dispatch(actions) {
        // reducer相当于一个计划修改state的函数，
        // 只能通过计划内的action type去修改state，否则就返回原始state
        state = reducer(state, actions);

        // 通知注册的监听器
        for(let i = 0; i < listeners.length; i += 1) {
            const listenr = listeners[i];
            listenr();
        }
    }

    // 获取store的state
    function getState() {
        return state;
    }

    // reducer 拆分后，和组件是一一对应的。我们就希望在做按需加载的时候，
    // reducer 也可以跟着组件在必要的时候再加载，然后用新的 reducer 替换老的 reducer。
    // reducer 模块热更新的时候会用到
    function replaceReducer(nextReducer) {
        reducer = nextReducer;
        /*刷新一遍 state 的值，新来的 reducer 把自己的默认状态放到 state 树上去*/
        dispatch({ type: ACTION_TYPES.INIT });
    }

    // 用一个不匹配任何计划的 type，来获取初始值
    // 目的是为了初始化state，因为action匹配不到值
    dispatch({ type: ACTION_TYPES.INIT });

    return {
        subscribe,
        dispatch,
        getState,
        replaceReducer
    };
};

export default createStore;



