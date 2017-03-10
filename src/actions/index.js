import Firebase from 'firebase';
import database from '../startup/database';

const Belts = database.ref().child('belts');

export function fetchBelts() {
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
                type: "FETCH_POSTS",
                payload: beltArr
            });
        });
    };
}