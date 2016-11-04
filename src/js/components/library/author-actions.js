import { DISPLAY_AUTHORS } from './author-action-types';

export function displayAuthors(authors) {
  return {
    type: DISPLAY_AUTHORS,
    authors: authors
  }
}
