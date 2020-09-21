import { fromJS } from 'immutable';

// state
const initialState = fromJS({
    count: 1
});

export default function (state = initialState, actions) {
    console.log('state', state);
    console.log('actions', actions);

    switch(actions.type) {
        case 'ADD':
            return state;
        
        default:
            return state;
    }
}