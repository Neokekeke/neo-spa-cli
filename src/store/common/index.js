import { createStore } from 'redux';
import common from './reducers';

const store = createStore(common);

export default store;