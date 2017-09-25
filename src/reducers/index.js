import { combineReducers } from 'redux';
import dashboard from './dashboard';
import filter from './filter'

const rootReducer = combineReducers({
  dashboard,
  filter
});

export default rootReducer;