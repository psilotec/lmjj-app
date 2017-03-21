import { BELT_SELECTED } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case BELT_SELECTED:
            return action.payload;
        default:
            return state;
    }
};