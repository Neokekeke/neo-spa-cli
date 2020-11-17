import { createSelector } from 'reselect';

const selectorGlobal = () => state => state.get('global');

// 创建一个持续缓存的selector
// 当state 发生变化时，createSelector第一个参数input selector的值发生变化，
// createSelector第二个参数会以第一个参数结果作为参数，返回新计算的值，input selector的值没有变化时，则不进行计算

export const selectorCount = () => createSelector(
    [selectorGlobal()],
    globalState => globalState.get('count')
);