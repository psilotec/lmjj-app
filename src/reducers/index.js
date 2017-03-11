import { combineReducers } from 'redux';

import BeltsReducer from './reducer_belts';

const rootReducer = combineReducers({
  belts: BeltsReducer,
});

export default rootReducer;