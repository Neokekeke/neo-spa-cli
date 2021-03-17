import {
    take,
    put,
    takeEvery,
    fork,
    takeLatest,
    call,
    delay,
} from 'redux-saga/effects';

function* syncAdd(payload) {
    console.log('payload--saga', payload);
    try {
        // yield delay(2000);
        yield put({ type: 'SYNC_SAGA_ADD', payload });
    } catch (e) {
        console.log('error', e);
    }
}

function* watchAll() {
    yield takeLatest('SYNC_SAGA_ADD', syncAdd);
}

export default function* sagas() {
    yield fork(watchAll);
}
