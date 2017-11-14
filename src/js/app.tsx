import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as styles from '../styles'; // eslint-disable-line no-unused-vars

import { MainNavigation } from './layout';
import { Intro, Portfolio } from './containers';
import { LibrarySection } from './layout';

import store from './store';

render((
  <Provider store={store} >
    <BrowserRouter>
      <div className="app">
        <MainNavigation />
        <Route path="/" exact component={Intro} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/library" component={LibrarySection} />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
