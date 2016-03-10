import { GET_REPOS, DISPLAY_REPOS } from '../constants/github-action-types';
import { fetchResource, resourceFetchSucceeded, resourceFetchFailed } from './resource-actions';
import http from '../utils/http';

export function displayRepos(repos) {
  return {
    type: DISPLAY_REPOS,
    repos: repos
  }
}

export function getAllReposForUser(user) {
  return dispatch => {
    dispatch(fetchResource(GET_REPOS));
    http.get(`https://api.github.com/users/${user}/repos`)
      .then(res => {
          dispatch(displayRepos(res.data));
          dispatch(resourceFetchSucceeded(GET_REPOS));
        }, err => {
          dispatch(resourceFetchFailed(GET_REPOS, err));
        }
      );
  }
}
