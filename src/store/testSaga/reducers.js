import { fromJS } from 'immutable';

const initialState = fromJS({
    sagaCount: 0
});


export default function SagaReducer(state = initialState, actions) {
    switch(actions.type) {
        case 'SAGA_ADD':
            return state.set('sagaCount', state.get('sagaCount') + actions.payload);
        case 'SAGA_MINUS':
            return state.set('sagaCount', state.get('sagaCount') - actions.payload);
        case 'SYNC_SAGA_ADD':
            return state.set('sagaCount', state.get('sagaCount') + actions.payload);
        default:
            return state;
    }
}