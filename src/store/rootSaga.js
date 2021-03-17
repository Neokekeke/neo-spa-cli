/**
 * redux saga
 */
import testSagas from './testSaga/sagas';
import globlSagas from './global/sagas';

const rootSagas = [globlSagas, testSagas];
export default rootSagas;
