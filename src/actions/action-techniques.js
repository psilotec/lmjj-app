import { FETCH_TECHNIQUES, GET_SELECTED_TECHNIQUE_DATA } from './types';
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

const getSelectedTechniqueData = (techId, techniques) => {
    return dispatch => {
        const selectedTechnique = techniques.filter((tech) => {
                return tech.techId === techId;
        })[0];

        console.log(selectedTechnique)
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