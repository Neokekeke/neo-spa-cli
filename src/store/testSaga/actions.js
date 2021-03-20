export const SAGA_ADD = 'SAGA_ADD';
export const SAGA_MINUS = 'SAGA_MINUS';
export const SYNC_SAGA_ADD_REQUEST = 'SYNC_SAGA_ADD_REQUEST';
export const SYNC_SAGA_ADD_SUCCESS = 'SYNC_SAGA_ADD_SUCCESS';
export const SYNC_SAGA_ADD_FAILED = 'SYNC_SAGA_ADD_FAILED';

export const ADD = () => {
    return {
        type: SAGA_ADD,
        payload: 16
    };   
};

export const MINUS = () => {
    return {
        type: SAGA_MINUS,
        payload: 10
    };
};

export const SYNC_ADD = () => {
    return {
        type: SYNC_SAGA_ADD_REQUEST,
        payload: 66
    };
};