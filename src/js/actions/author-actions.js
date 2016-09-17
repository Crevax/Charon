import { GET_ALL_AUTHORS, DISPLAY_AUTHORS } from '../constants/author-action-types';
import { fetchResource, resourceFetchSucceeded, resourceFetchFailed } from './resource-actions';
import http from '../utils/http';

export function displayAuthors(authors) {
  return {
    type: DISPLAY_AUTHORS,
    authors: authors
  }
}

export function getAllAuthors() {
  return dispatch => {
    dispatch(fetchResource(GET_ALL_AUTHORS));
    http.get('/api/author')
      .then(res => {
          dispatch(displayAuthors(res.data));
          dispatch(resourceFetchSucceeded(GET_ALL_AUTHORS));
        }, err => {
          dispatch(resourceFetchFailed(GET_ALL_AUTHORS, err));
        }
      );
  }
}
