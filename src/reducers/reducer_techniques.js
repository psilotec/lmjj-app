import { FETCH_TECHNIQUES } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_TECHNIQUES:
            return action.payload;
        default:
            return state;
    }
};