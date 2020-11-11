import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import allReducers from './root.reducer.js';

const reducers = combineReducers(allReducers);

const logger = createLogger({
    // ...options
});
  
// redux create store
const store = createStore(
    reducers, 
    applyMiddleware(logger)
);

export default store;