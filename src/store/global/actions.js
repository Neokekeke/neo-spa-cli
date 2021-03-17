import { getX } from '../../xhr/callApi';
// ADD
const ADD = 'ADD'; 

// MINUS
const MINUS = 'MINUS';

const TEST_SAGA = 'TEST_SAGA';

export const add = () => {
    return {
        type: ADD,
        count: 10
    };
};

export const minus = () => {
    return {
        type: MINUS,
        count: 2
    };
};


const MUTIPLY_REQUEST = payload => ({type: 'MUTIPLY_REQUEST', ...payload});
const MUTIPLY_SUCCESS = payload => ({type: 'MUTIPLY_SUCCESS', ...payload});
const MUTIPLY_FAILED =  payload => ({type: 'MUTIPLY_FAILED', ...payload});
// use redux-thunk
export const mutiplys = (payload) => {
    return function(dispatch) {
        dispatch(MUTIPLY_REQUEST(payload));
        getX('https://api.github.com/').then(res => {
            dispatch(MUTIPLY_SUCCESS(res));
        }).catch(err => {
            dispatch(MUTIPLY_FAILED(err));
        });
    };
};

export const SYNC_SAGA_ADD_REQUEST = 'GLOBAL_SYNC_SAGA_ADD_REQUEST';
export const SYNC_SAGA_ADD_SUCCESS = 'GLOBAL_SYNC_SAGA_ADD_SUCCESS';
export const SYNC_SAGA_ADD_FAILED = 'GLOBAL_SYNC_SAGA_ADD_FAILED';

export const SYNC_ADD = () => {
    return {
        type: SYNC_SAGA_ADD_REQUEST,
        payload: 100
    };
};