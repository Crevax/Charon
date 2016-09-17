import { combineReducers } from 'redux';
import { routeState } from './route-reducer';
import { repos } from './github-reducer';
import { authors } from './author-reducer';

const rootReducer = combineReducers({
  routeState,
  repos,
  authors
});

export default rootReducer;
