// mobx react状态管理库
// 装饰器
// 起到类、变量等修饰作用
// jsx
// import { obserable } from 'mobx-react';

import App from './app';
import React from 'react';
import ReactDom from 'react-dom';
import store from '../store/index';
import { Provider } from 'react-redux';

// 错误边界捕获 errorBoundary
import ErrorBoundary from './errorBoundary';

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));