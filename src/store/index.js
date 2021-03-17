import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer  from './root.reducer.js';
import thunk from 'redux-thunk';

import rootSagas from './rootSaga';

const reducers = combineReducers(rootReducer);

// 日志
const logger = createLogger({
    // ...options
});

// saga: saga的意思就是任务列表，可以表示为任务列表的集合，sagaMiddleWare
const sagaMiddleWare = createSagaMiddleware();

// 中间件数组
const middlewareList = [sagaMiddleWare]; // thunk

if (process.env.NODE_ENV == 'development') {
    middlewareList.push(logger);
}

// redux create store
const store = createStore(
    reducers, 
    applyMiddleware(...middlewareList)
);

rootSagas.map(saga => sagaMiddleWare.run(saga));

console.log('------------[storestore]------------' + '\n', store.getState().toJS());

export default store;