import { FETCH_TECHNIQUES } from './types';
import database from '../startup/database';

const Techniques = database.ref().child('techniques');

const fetchTechniques = () => {
    return dispatch => {
        Techniques.on('value', snapshot => {
            dispatch({
                type: FETCH_TECHNIQUES,
                payload: snapshot.val(),
            })
        })
    };
};

export {
    fetchTechniques,
};