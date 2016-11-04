import { combineReducers } from 'redux';
import { routeState } from '../components/routing';
import { repos } from '../components/github';
import { authors } from '../components/library';

const rootReducer = combineReducers({
  routeState,
  repos,
  authors
});

export default rootReducer;
