import { getX } from '../../xhr/callApi';
// ADD
const ADD = 'ADD'; 

// MINUS
const MINUS = 'MINUS';

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