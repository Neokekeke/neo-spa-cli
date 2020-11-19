import { createSelector } from 'reselect';

const selectorTest = () => state => state.get('test');

export const selectorCount = () => createSelector(
    selectorTest(),
    testState => testState.get('count') 
);