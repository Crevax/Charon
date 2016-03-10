export const DISPLAY_REPOS = 'DISPLAY_REPOS';

export function repos(state = [], action) {
  switch (action.type) {
    case DISPLAY_REPOS:
      return action.repos;
    default:
      return state;
  }
}
