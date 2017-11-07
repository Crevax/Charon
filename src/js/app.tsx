import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as styles from '../styles'; // eslint-disable-line no-unused-vars

import { MainNavigation } from './layout';
import { Intro, Portfolio, Library, AuthorList } from './containers';

import store from './store';

render((
  <Provider store={store} >
    <BrowserRouter>
      <div className="app">
        <MainNavigation />
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/library" exact component={AuthorList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
