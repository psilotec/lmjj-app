import { GET_SELECTED_TECHNIQUE_DATA } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case GET_SELECTED_TECHNIQUE_DATA:
            return action.payload;
        default:
            return state;
    }
};