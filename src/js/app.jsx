import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainNavigation from './containers/MainNavigation';
import Home from './pages/Home';

import store from './store';

render((
  <Provider store={store} >
    <Router history={browserHistory} >
      <Route path='/' component={MainNavigation} >
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
