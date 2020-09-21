import { fromJS } from 'immutable';

// state
const initialState = fromJS({
    count: 1
});

export default function (state = initialState, actions) {
    switch(actions.type) {
        case 'ADD':
            return state.get('count') + 1;
        
        default:
            return state;
    }
}