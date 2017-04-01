import { combineReducers } from 'redux';

import BeltsReducer from './reducer_belts';
import SelectedBeltReducer from './reducer_selected_belt';
import TechniquesReducer from './reducer_techniques';
import SelectedTechniqueReducer from './reducer_selected_technique';

const rootReducer = combineReducers({
  belts: BeltsReducer,
  selectedBelt: SelectedBeltReducer,
  techniques: TechniquesReducer,
  selectedTechnique: SelectedTechniqueReducer,
});

export default rootReducer;