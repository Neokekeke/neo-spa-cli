import {take, call, put, select, fork, takeEvery, takeLatest} from 'redux-saga/effects';

// generator 函数
export function* helloSaga() {
    try {
        yield take('TEST_SAGA');
        yield put({type:'SET_SAGA' });
        console.log('this is first saga');
    } catch(err) {
        console.log('error');
    }
}

