import { FETCH_BELTS } from '../actions/types';

export default function(state = [], actions) {
    switch(action.type) {
        case FETCH_BELTS:
            return action.payload;
        default:
            return state;
    };
};