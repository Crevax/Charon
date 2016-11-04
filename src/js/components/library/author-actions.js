import { GET_ALL_AUTHORS, DISPLAY_AUTHORS } from './author-action-types';
import { fetchResource, resourceFetchSucceeded, resourceFetchFailed } from '../../actions/resource-actions';
import request from 'superagent';

export function displayAuthors(authors) {
  return {
    type: DISPLAY_AUTHORS,
    authors: authors
  }
}

export function getAllAuthors() {
  return dispatch => {
    dispatch(fetchResource(GET_ALL_AUTHORS));
    request.get('/api/author')
      .end((err, res) => {
        if (err || !res.ok) {
          dispatch(resourceFetchFailed(GET_ALL_AUTHORS, err));
        } else {
          dispatch(displayAuthors(res.body));
          dispatch(resourceFetchSucceeded(GET_ALL_AUTHORS));
        }
      });
  }
}
