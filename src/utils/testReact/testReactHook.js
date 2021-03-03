/* eslint-disable react/prop-types */
import React, {
    useState,
    useReducer,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef
} from 'react';

export function TodoList(props) {
    return <button onClick={props.toggle}>
        切换哦===》{props.status ? 'open' : 'close'}
    </button>;
}

// useState
export function Todo(props) {
    const { val, setVal } = useState(false);
    const toggle = setVal(!val);

    const childrenEle = React.Children(props.children, child => {
        // 因为不能直接修改children的props，用cloneELement可以直接返回一个reactElement，并且能传递
        // 父组件的一些props, 和context是类似的

        // 这里判断一些，如果child是纯标签元素，如div、span等，它们是不存在props是函数的情况，
        // 只能接受的props为字符串
        if(typeof child.type == 'string') { // 如果是字符串，就直接返回
            return child;
        }
        return React.cloneElement(child, { toggle, status: val });
    });

    return childrenEle;
}