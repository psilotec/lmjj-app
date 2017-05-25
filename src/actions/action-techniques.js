import { FETCH_TECHNIQUES, GET_SELECTED_TECHNIQUE_DATA } from './types';
import database from '../startup/database';
import createBrowserHistory from 'history/createBrowserHistory';

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

const directionalNavigate = (techId, techniques, direction) => {
  return (dispatch) => {
    let prevTechId = parseInt(techId, 10) - 1,
    nextTechId = parseInt(techId, 10) + 1,
    paddedTechId,    
    newTechId;

    function padTechId (techId) {
        if (techId <= 9999) { paddedTechId = ("000" + techId).slice(-4); }
        return paddedTechId;
    }

    // Logic to handle navigation direction and ensure user can't navigate into negatives or greater than highest techId
    if(direction === "previous" && techId >= 1) {
        newTechId = padTechId(prevTechId);
    } else if(direction === "next" && techId < techniques.length - 1) {
        newTechId = padTechId(nextTechId);
    } else {
        newTechId = techId;
    }

    // React Router adjustment to sync url with Redux
    const history = createBrowserHistory();
    history.push(`/technique/${newTechId}`);

    dispatch(getSelectedTechniqueData(newTechId, techniques));
  }
};

const editTechnique = (techId, techDesc) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Techniques.child(techId).update({
                "techDesc": techDesc
            }).then(() => resolve());
        })
    }
};

export {
    fetchTechniques,
    getSelectedTechniqueData,
    directionalNavigate,
    editTechnique,
};

//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });