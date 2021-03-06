import { FETCH_TECHNIQUES } from '../actions/types';

export default function(state = [], action) {
    // Convert object of objects into an array of objects to be mapped over
    let techniquesArray = [];
    for(var key in action.payload) {
        if(action.payload.hasOwnProperty(key)) {
            techniquesArray.push(action.payload[key]);
        }
    }

    switch(action.type) {
        case FETCH_TECHNIQUES:
            return techniquesArray;
        default:
            return state;
    }
};