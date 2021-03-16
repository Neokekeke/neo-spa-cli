import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { createLogger } from 'redux-logger';
import rootReducer  from './root.reducer.js';
import thunk from 'redux-thunk';

const reducers = combineReducers(rootReducer);

// 中间件数组
const middlewareList = [thunk];

// 日志
const logger = createLogger({
    // ...options
});
  
if (process.env.NODE_ENV == 'development') {
    middlewareList.push(logger);
}

// redux create store
const store = createStore(
    reducers, 
    applyMiddleware(...middlewareList)
);

console.log('------------[storestore]------------' + '\n', store.getState().toJS());

export default store;