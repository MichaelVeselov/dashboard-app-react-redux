import { combineReducers } from 'redux';
import { positionReducer } from './positions/positionReducer';
import { filterReducer } from './filters/filterReducer';

const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});

export { rootReducer };
