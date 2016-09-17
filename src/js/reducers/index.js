import { combineReducers } from 'redux';
import { routeState } from './route-reducer';
import { repos } from '../components/github';
import { authors } from './author-reducer';

const rootReducer = combineReducers({
  routeState,
  repos,
  authors
});

export default rootReducer;
