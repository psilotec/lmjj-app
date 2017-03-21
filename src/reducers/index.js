import { combineReducers } from 'redux';

import BeltsReducer from './reducer_belts';
import SelectedBeltReducer from './reducer_selected_belt';

const rootReducer = combineReducers({
  belts: BeltsReducer,
  selectedBelt: SelectedBeltReducer,
});

export default rootReducer;