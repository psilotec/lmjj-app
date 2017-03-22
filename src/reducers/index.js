import { combineReducers } from 'redux';

import BeltsReducer from './reducer_belts';
import SelectedBeltReducer from './reducer_selected_belt';
import TechniquesReducer from './reducer_techniques';

const rootReducer = combineReducers({
  belts: BeltsReducer,
  selectedBelt: SelectedBeltReducer,
  techniques: TechniquesReducer,
});

export default rootReducer;