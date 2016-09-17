import { GET_REPOS, DISPLAY_REPOS } from '../constants/github-action-types';
import { fetchResource, resourceFetchSucceeded, resourceFetchFailed } from './resource-actions';
import request from 'superagent';

export function displayRepos(repos) {
  return {
    type: DISPLAY_REPOS,
    repos: repos
  }
}

export function getAllReposForUser(user) {
  return dispatch => {
    dispatch(fetchResource(GET_REPOS));
    request.get(`https://api.github.com/users/${user}/repos`)
      .end((err, res) => {
        if (err || !res.ok) {
          dispatch(resourceFetchFailed(GET_REPOS, err));
        } else {
          dispatch(displayRepos(res.body));
          dispatch(resourceFetchSucceeded(GET_REPOS));
        }
      });
  }
}
