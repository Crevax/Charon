import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routeState } from '../components/routing';
import { repos } from '../components/github';
import { authors } from '../components/library';

const rootReducer = combineReducers({
  routeState,
  repos,
  authors
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
