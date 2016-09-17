import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainNavigation from './containers/MainNavigation';
import LibraryNavigation from './containers/LibraryNavigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Library from './pages/Library';
import Author from './pages/Author';

import store from './store';

render((
  <Provider store={store} >
    <Router history={browserHistory} >
      <Route path='/' component={MainNavigation} >
        <IndexRoute component={Home} />
        <Route path='portfolio' component={Portfolio} />
        <Route path='library' component={LibraryNavigation}>
          <IndexRoute component={Library} />
          <Route path='author' component={Author} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
