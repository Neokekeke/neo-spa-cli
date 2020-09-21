import { createSelector } from 'reselect';

const selectorRootPage = () => state => {
    console.log('state', state.get('count'));
    return state.get('count');
};

export const selectorCount = () => createSelector(
    selectorRootPage(),
    state => state.get('count')
);