import global from './global/reducers';
import test from './test/reducers';
import testSaga from './testSaga/reducers';

// 根reducer
const rootReducers = {
    global,
    test,
    testSaga
};

export default rootReducers;