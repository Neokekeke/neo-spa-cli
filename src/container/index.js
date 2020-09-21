// mobx react状态管理库
// 装饰器
// 起到类、变量等修饰作用
// jsx
// import { obserable } from 'mobx-react';

import App from './app';
import React from 'react';
import ReactDom from 'react-dom';
import store from '../store/rootStore';
import { Provider } from 'react-redux';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));