import { FETCH_TECHNIQUES, GET_SELECTED_TECHNIQUE_DATA } from './types';
import database from '../startup/database';

const Techniques = database.ref().child('techniques');

const fetchTechniques = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Techniques.on('value', snapshot => {
                dispatch({
                    type: FETCH_TECHNIQUES,
                    payload: snapshot.val(),
                })
                resolve(true);
            })
        })
    };
};

const getSelectedTechniqueData = (techId, techniques) => {
    return dispatch => {
        const selectedTechnique = techniques.filter((tech) => {
                return tech.techId === techId;
        })[0];
        dispatch({
            type: GET_SELECTED_TECHNIQUE_DATA,
            payload: selectedTechnique,
        })
    };
};

export {
    fetchTechniques,
    getSelectedTechniqueData,
};