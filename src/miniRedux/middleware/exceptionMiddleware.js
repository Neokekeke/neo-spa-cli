// exception
const exceptionMiddleware = store => next => action => {
    try {
        next(action);
    } catch (error) {
        console.error(error);
    }
};

export default exceptionMiddleware;