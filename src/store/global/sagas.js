import {
    take,
    takeEvery,
    takeLatest,
    call,
    put,
    fork,
    delay,
    select
} from 'redux-saga/effects';

// worker saga
function* testSaga2(data) {
    const { payload } = data;
    try {
        yield delay(1000);
        const state = yield select(state => state.get('global'));
        console.log('aaaaaaa', state.toJS());
        yield put({type: 'GLOBAL_SYNC_SAGA_ADD_SUCCESS', payload});
    } catch(e) {
        yield put({type: 'GLOBAL_SYNC_SAGA_ADD_FAILED', payload});
    }
}

// watch saga
function* watchAll() {
    yield takeLatest('GLOBAL_SYNC_SAGA_ADD_REQUEST', testSaga2);
}

// root saga
export default function* rootSagas() {
    yield fork(watchAll);
}