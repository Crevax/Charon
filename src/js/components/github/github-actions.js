import { DISPLAY_REPOS } from './github-action-types';

export function displayRepos(repos) {
  return {
    type: DISPLAY_REPOS,
    repos: repos
  }
}
