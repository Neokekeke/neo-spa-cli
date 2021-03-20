import { fromJS } from 'immutable';

// state
const initialState = fromJS({
    count: 1,
    name: 'global'
});

export default function (state = initialState, actions) {
    switch(actions.type) {
        case 'ADD':
            return state.set('count', state.get('count')  + actions.count);
        case 'MINUS':
            return state.set('count', state.get('count')  - actions.count);
        
        case 'MUTIPLY_REQUEST':
            console.log('MUTIPLY_REQUEST', actions.data);
            return state;
        case 'MUTIPLY_SUCCESS':
            console.log('MUTIPLY_SUCCESS', actions.data);
            return state.set('count', state.get('count')  * 20);
        case 'MUTIPLY_FAILED':
            console.log('MUTIPLY_FAILED', actions.data);
            return state;

        case 'GLOBAL_SYNC_SAGA_ADD_SUCCESS':
            return state.set('count', state.get('count') + actions.payload);
        case 'GLOBAL_SYNC_SAGA_ADD_FAILED':
            return state;
        default:
            return state;
    }
}