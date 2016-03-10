import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import GithubRepoList from './containers/GithubRepoList';

import store from './store';

render((
  <Provider store={store} >
    <GithubRepoList />
  </Provider>
), document.getElementById('app'));
