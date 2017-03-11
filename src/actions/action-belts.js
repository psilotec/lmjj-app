import * as firebase from 'firebase';
import { FETCH_BELTS } from './types';
import database from '../startup/database';

const Belts = database.ref().child('belts');

const fetchBelts = () => {
    return (dispatch) => {
        Belts.on('value', snapshot => {
            const obj = snapshot.val();
            let beltArr = [];

            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    beltArr.push(obj[key]);
                }
            }

            dispatch({
                type: FETCH_BELTS,
                payload: beltArr,
            })
        })
    };
};

export {
    fetchBelts,
};