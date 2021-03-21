import createStore from '../createStore';
import combineReducers from '../combineReducers';
import applyMiddleware from '../applyMiddleware';
import exceptionMiddleware from '../middleware/exceptionMiddleware';
import timeStampMiddleware from '../middleware/timestampMiddleware';
import loggerMiddleware from '../middleware/loggerMiddleware';

// 下面拆分一下reducers
function countStateReducer(state = {}, actions) {
    switch(actions.type) {
        case 'ADD':
            return { ...state, count: state.count + 1 };
        case 'CHANGE_INFO':
            return { ...state, name: actions.payload };
        default:
            return state;
    }
}

function infoStateReducer(state = {}, actions) {
    switch(actions.type) {
        case 'CHANGE_INFO':
            return { ...state, name: actions.payload };
        default:
            return state;
    }
}

// 合并reducer
const reducers = combineReducers({
    countState: countStateReducer,
    infoState: infoStateReducer
});

const middlewareList = [exceptionMiddleware, timeStampMiddleware, loggerMiddleware];
const store = createStore(reducers, applyMiddleware(...middlewareList));

store.subscribe(() => {
    // console.log('-----state-----', store.getState());
});

store.dispatch({ type: 'CHANGE_INFO', payload: '321' });