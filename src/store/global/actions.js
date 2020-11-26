import axios from 'axios';

// ADD
const ADD = 'ADD'; 
// MINUS
const MINUS = 'MINUS';

export const add = () => {
    let count = 20;
    setTimeout(() => {
        count = 100;
    }, 3000);
    return {
        type: ADD,
        count: count
    };
};

export const minus = () => {
    return {
        type: MINUS,
        count: 2
    };
};