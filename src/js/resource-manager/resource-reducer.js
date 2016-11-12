import { FETCH_RESOURCE, RESOURCE_FETCH_SUCCEEDED, RESOURCE_FETCH_FAILED } from './resources';

export function resourceFetchStatus(state = {}, action) {
  switch (action.type) {
    case FETCH_RESOURCE:
    case RESOURCE_FETCH_SUCCEEDED:
    case RESOURCE_FETCH_FAILED:
      return Object.assign({}, state, { [action.fetchType]: {
        'progress': action.progress, 'message': action.message
      }});
    default:
      return state;
  }
}
