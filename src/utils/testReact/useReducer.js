import React, { useReducer, useRef } from 'react';

const initState = {
    count: 0
};

function init(values) {
    return values;
}

function reducer(state, action) {
    switch(action.type) {
        case 'plus':
            return { count: state.count += 1 };
        case 'minus':
            return { count: state.count -= 1 };
        case 'init':
            return init({count: 0});
        default:
            return state;
    }
}

export function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 }, init);
    // useRef 用来存值是可以的，因为它每次都返回同一个值地址是一样
    const refContainer = useRef({a: 123});
    const refContainer2 = useRef({a: 312});

    console.log('initState', initState, refContainer2, refContainer);
    return <>
        <div>{state.count}</div>
        <div onClick={() => dispatch({type: 'plus'})}>plus</div>
        <div onClick={() => dispatch({type: 'minus'})}>minus</div>
        <div onClick={() => dispatch({type: 'init'})}>init</div>
    </>;
}