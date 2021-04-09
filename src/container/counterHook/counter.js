import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
    useContext
} from 'react';
import Input from './input';
import { Form } from 'antd';

const CounterContext = React.createContext();
function Counter(props) {
    // const [ form ] = Form.useForm();
    // console.log(form);

    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
 
    // useMemo返回的是一个值，缓存的一个值
    const getNum = useMemo(() => {
        console.log('useMemo useMemo');
        // return Array.from({length: count * 100}, (v, i) => i).reduce((a, b) => a+b);
    }, []);

    // useCallBack返回的是一个函数，缓存的函数
    function getNum2 (){
        console.log('useCallback useCallback', count);
        setCount(count + 1);
    }

    return <div>
        <h3>总和：{count}</h3>
        <div>
            <Input />      
            <button onClick={getNum2}>+1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
            <CounterContext.Provider value={{counterProps: 213}}>
                <Test />
            </CounterContext.Provider>
        </div>
    </div>;
}

function Test() {
    const {counterProps} = useContext(CounterContext);
    return <>
        {counterProps}
    </>;
}

export default Counter;
