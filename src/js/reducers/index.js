import { combineReducers } from 'redux';
import { repos } from './github-reducer';

const rootReducer = combineReducers({
  repos
});

export default rootReducer;
