import * as R from 'ramda';

export const runTest = () => {
    const double = x => x * 2;

    const result = R.map(double, [6, 7, 8]); 
    
    console.log('ramda', R, result);  
};