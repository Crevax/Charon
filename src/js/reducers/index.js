import { combineReducers } from 'redux';
import { routeState } from './route-reducer';
import { repos } from './github-reducer';

const rootReducer = combineReducers({
  routeState,
  repos
});

export default rootReducer;
