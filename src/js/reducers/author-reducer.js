import { DISPLAY_AUTHORS } from '../constants/author-action-types';

export function authors(state = [], action) {
  switch (action.type) {
    case DISPLAY_AUTHORS:
      return action.authors;
    default:
      return state;
  }
}
