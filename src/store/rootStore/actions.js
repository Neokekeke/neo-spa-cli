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