import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import styles from '../styles'; // eslint-disable-line no-unused-vars

import { BaseLayout, LibraryNavigation } from './layout';
import { Home, Portfolio, Library, Author } from './containers';

import store from './store';

render((
  <Provider store={store} >
    <Router history={browserHistory} >
      <Route path='/' component={BaseLayout} >
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
