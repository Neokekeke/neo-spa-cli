import { fromJS } from 'immutable';

// state
const initialState = fromJS({
    count: 1
});

export default function (state = initialState, actions) {
    switch(actions.type) {
        case 'ADD':
            return state.set('count', state.get('count')  + actions.count);
        case 'MINUS':
            return state.set('count', state.get('count')  - actions.count);
        default:
            return state;
    }
}