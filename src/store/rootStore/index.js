import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const logger = createLogger({
    // ...options
});
  
const store = createStore(
    reducer, 
    applyMiddleware(logger)
);

export default store;