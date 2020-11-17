import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { createLogger } from 'redux-logger';
import rootReducer  from './root.reducer.js';

const reducers = combineReducers(rootReducer);

console.log('rootReducers', rootReducer);

// 日志
const logger = createLogger({
    // ...options
});
  
// redux create store
const store = createStore(
    reducers, 
    applyMiddleware(logger)
);

export default store;