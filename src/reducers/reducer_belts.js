import { FETCH_BELTS } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_BELTS:
            return action.payload;
        default:
            return state;
    };
};