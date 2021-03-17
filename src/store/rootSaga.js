/**
 * redux saga
 */
import testSagas from './testSaga/sagas';

function* rootSagas() {
    yield [testSagas];
}
export default rootSagas;