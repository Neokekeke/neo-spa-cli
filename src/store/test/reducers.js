import { fromJS } from 'immutable';

const initialState = fromJS({
    count: 666
});

export default function(state = initialState, action) {
    switch(action.type) {
        case 'TEST_TYPE':
            return state.get('count') + 666;
        default:
            return state;
    }
}