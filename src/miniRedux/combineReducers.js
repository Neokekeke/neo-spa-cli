// 多个reducer合并
export default function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    // console.log('reducerKeys', reducerKeys);

    // 返回一个新的reducer，合并之后的reducer
    return function combination(state = {}, actions) {
        // 生成新的一个state
        const nextState = {};

        for(let i = 0; i < reducerKeys.length; i += 1) {
            const key = reducerKeys[i];
            const reducer = reducers[key];

            // 找出对应的state，之前rootState的key的值，入参state == rootState
            const prevKeyState  = state[key];
            // console.log('prevKeyState', prevKeyState);

            // 执行reducer，获得新的一个state
            const nextKeyState = reducer(prevKeyState, actions);
            // console.log('nextKeyState', nextKeyState);

            nextState[key] = nextKeyState;
        }

        // console.log('nextState', nextState);
        return nextState;
    };
}