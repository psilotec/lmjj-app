import * as firebase from 'firebase';
import { FETCH_BELTS } from './types';
import database from '../startup/database';

const Belts = database.ref().child('belts');

const fetchBelts = () => {
    return (dispatch) => {
        Belts.on('value', snapshot => {
            dispatch({
                type: FETCH_BELTS,
                payload: snapshot.val();,
            })
        })
    };
};

export {
    fetchBelts,
};