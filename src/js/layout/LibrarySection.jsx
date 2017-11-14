import * as React from 'react';
import { Route } from 'react-router-dom';
import { LibraryNavigation } from './';
import { AuthorList, Library } from '../containers';

const LibrarySection = ({ match }) => (
  <div className='libary'>
    <LibraryNavigation />
    <Route path={match.url} exact component={Library} />
    <Route path={`${match.url}/book`} render={() => (
      <h2>Books (Under Construction)</h2>
    )} />
    <Route path={`${match.url}/author`} component={AuthorList} />
  </div>
);

export default LibrarySection;
