import RoutesForApp from '../routes/routesForApp';
import React, { StrictMode }from 'react';
import store from '../store/index';
import { Provider } from 'react-redux'; // 类似于Context.Provider 对应的子组件都是 Context.Consumer

// 错误边界捕获 errorBoundary
import ErrorBoundary from './errorBoundary';

// StrictMode 严格模式下，副作用代码会执行两次，这是react为了确切标记潜在问题这样做的
/**
 * Strict Mode 的作用：
识别不安全的生命周期
关于使用过时字符串 ref API 的警告
关于使用废弃的 findDOMNode 方法的警告
检测意外的副作用
检测过时(遗留)的 context API
 */

function Root() {
    return <Provider store={store}>
        <ErrorBoundary>
            {/* <StrictMode> */}
            <RoutesForApp />
            {/* </StrictMode> */}
        </ErrorBoundary>
    </Provider>;
}

export default Root;