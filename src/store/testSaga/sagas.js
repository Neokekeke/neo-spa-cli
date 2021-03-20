import {
    take,
    put,
    takeEvery,
    fork,
    takeLatest,
    call,
    delay,
} from 'redux-saga/effects';

function* syncAdd(data) {
    try {
        yield delay(2000);
        yield put({ type: 'SYNC_SAGA_ADD_SUCCESS', payload: data.payload });
    } catch (e) {
        yield put({ type: 'SYNC_SAGA_ADD_FAILED', payload: data.payload });
        console.log('error', e);
    }
}

function* watchAll() {
    yield takeEvery('SYNC_SAGA_ADD_REQUEST', syncAdd);
}

export default function* sagas() {
    yield fork(watchAll);
}
