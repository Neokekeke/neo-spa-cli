import React, { useState, useEffect } from 'react';

// hook 是按顺序执行的，react每次执行的时候，如果调换顺序可能会出错
// hook 只能是在最外顶层调用，不能放在循环、判断、嵌套函数中执行，否则可能会出bug 

// useEffect
function TestUseEffect() {
    // name state
    const [name, setName] = useState('123');

    // age state
    const [age, setAge] = useState(18);

    // name effect
    useEffect(() => {
        setName('666');

        return function cleanUp() {
            alert('clear effect');
        };
    }, []);

    // age effect
    useEffect(() => {
        setName('321');
        setAge(19);
        document.title = name + '-' + age;
    }, [age, name]);

    return <div>测试 useEffect</div>;
}

export { TestUseEffect };