// timestamp
const timeStampMiddleware = store => next => action => {
    console.log('timeStamp---', Date.now());
    next(action);
};

export default timeStampMiddleware;