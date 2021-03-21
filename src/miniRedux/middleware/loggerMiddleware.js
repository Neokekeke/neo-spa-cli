// logger
const loggerMiddleware = store => next => action => {
    console.log('logger---[state]---', store.getState());
    console.log('logger---[action]---', action);
    next(action);
    console.log('logger---[next state]---', store.getState());
};

export default loggerMiddleware;