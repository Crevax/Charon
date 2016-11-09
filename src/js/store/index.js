import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { routeState } from '../components/routing';
import { repos } from '../components/github';
import { authors } from '../components/library';

const rootReducer = combineReducers({
  routeState,
  repos,
  authors
});

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
}

const store = configureStore();

export default store;
