import React, {
    useState,
    useEffect
} from 'react';

// 自定义hook是抽象拆分出来多个组件之间能复用的逻辑
function useCustom(id) {
    const [name, setName] = useState('123');

    useEffect(() => {
        console.log('useCustom is mount');
        setTimeout(() => {
            setName('312' + id);
            console.log('data change', name);
        }, 3000); 
    }, [name, id]);

    return { name };
}

function User1() {
    const { name } = useCustom('aaa');
    return <div>{name}</div>;
}

function User2() {
    const { name } = useCustom('bbb');
    return <div>{name}</div>;
}


console.log('先执行');
setTimeout(() => {
    console.log('后执行');
}, 100);
export {
    User1,
    User2
};