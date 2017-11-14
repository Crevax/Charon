import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routeState } from '../components/routing';
import { repos } from '../components/github';
import { authors } from '../components/library';
import { resourceFetchStatus } from '../resource-manager';

const rootReducer = combineReducers({
  routeState,
  repos,
  authors,
  resourceFetchStatus
});

const configureStore = () => {
  const middlewares = [thunk];

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
}

const store = configureStore();

export default store;
