import { BUSY, COMPLETE, INACTIVE, ERROR } from '../constants/app-constants';
import { FETCH_RESOURCE, RESOURCE_FETCH_SUCCEEDED, RESOURCE_FETCH_FAILED } from './resources';

export function fetchResource(type = '') {
  return {
    type: FETCH_RESOURCE,
    progress: BUSY,
    message: '',
    fetchType: type
  }
}

export function resetFetchState() {
  return {
    type: FETCH_RESOURCE,
    progress: INACTIVE,
    message: ''
  }
}

export function fetchSucceeded(type) {
  return {
    type: RESOURCE_FETCH_SUCCEEDED,
    progress: COMPLETE,
    message: 'Resources Successfully Returned',
    fetchType: type
  }
}

export function fetchFailed(type, message) {
  return {
    type: RESOURCE_FETCH_FAILED,
    progress: ERROR,
    message: message,
    fetchType: type
  }
}

export function resourceFetchSucceeded(type = '') {
  return dispatch => {
    dispatch(fetchSucceeded(type));
    dispatch(resetFetchState());
  }
}

export function resourceFetchFailed(type = '', message) {
  return dispatch => {
    dispatch(fetchFailed(type, message));
    dispatch(resetFetchState());
  }
}
