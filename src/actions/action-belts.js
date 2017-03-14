import { FETCH_BELTS, BELT_SELECTED } from './types';
import database from '../startup/database';

const Belts = database.ref().child('belts');

const fetchBelts = () => {
    return dispatch => {
        Belts.on('value', snapshot => {
            dispatch({
                type: FETCH_BELTS,
                payload: snapshot.val(),
            })
        })
    };
};

const selectBelt = (belt) => {
    // selectBelt is an ActionCreator that returns an action 
    return {
        type: BELT_SELECTED,
        payload: belt,
    };
};

export {
    fetchBelts,
    selectBelt,
};