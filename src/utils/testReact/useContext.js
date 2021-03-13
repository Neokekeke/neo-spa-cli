import React, { useContext, useEffect } from 'react';

export function TestContext() {
    let str = '123';
    setTimeout(() => {
        str='321';
    }, 2000);
    const MyContext = React.createContext(str);
    const context = useContext(MyContext);
    console.log('context', context, str);

    useEffect(() =>{
        console.log('context mount');
        setTimeout(() => {
            console.log('setTimeout');
        });
        return () => {
            console.log('context destory');
        };
    }, []);

    return <div>test context {context}</div>;
}