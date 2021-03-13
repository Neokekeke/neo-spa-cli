/* eslint-disable react/prop-types */
// 函数组件使用memo进行性能优化，若组件props和state没有更新则不对组件渲染
import React, { useState, useEffect } from 'react';

//React.memo 仅检查 props 变更
function Com1(props) {
    const [ val, setVal ] = useState(666);
    const setCount = () => setVal('Com1');

    useEffect(() => {
        console.log('aaa');
    }, [val]);

    console.log('this is memo com', val);
    return <div onClick={setCount}>memo com-------{val}{props.name}</div>;
}

// 相当于shouldComponentUpdate，memo中的第二个参数
function equalStr(prevProps, nextProps) {

}
const MemoCom = React.memo(Com1, equalStr);

// ----------------------------------------------------
function Com2(props) {
    const [ val, setVal ] = useState(888);
    const setCount = () => setVal('Com2');

    // console.log('this is memo com', val);
    return <div onClick={setCount}>com-------{val}{props.name}</div>;
}

export { MemoCom, Com2 };
