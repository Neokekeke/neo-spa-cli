export const SAGA_ADD = 'SAGA_ADD';
export const SAGA_MINUS = 'SAGA_MINUS';
export const SYNC_SAGA_ADD = 'SYNC_SAGA_ADD';

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
        type: SYNC_SAGA_ADD,
        payload: 100
    };
};