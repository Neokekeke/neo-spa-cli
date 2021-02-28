/* eslint-disable react/prop-types */
import React, {
    Fragment
} from 'react';

// 错误边界用于捕获代码中js出现的问题，而js错误不影响react代码执行，得到降级后的ui
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gotError: false
        };
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        console.log('getDerivedStateFromError------', error);
        return {
            gotError: true
        };
    }

    componentDidCatch(error, info) {
        console.error('componentDidCatch error------', error, info);
    }

    render() {
        if (this.state.gotError) {
            return <div> Page Got Error </div>;
        }
        return <Fragment>{this.props.children}</Fragment>;
    }
}
