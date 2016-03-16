import { DISPLAY_REPOS } from '../constants/github-action-types';

export function repos(state = [], action) {
  switch (action.type) {
    case DISPLAY_REPOS:
      return action.repos;
    default:
      return state;
  }
}
