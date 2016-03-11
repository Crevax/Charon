import { ROUTE_CHANGE, ROUTE_STATES } from '../constants/route-states';

export function routeState(state = ROUTE_STATES.HOME, action) {
  switch (action.type) {
    case ROUTE_CHANGE:
      return action.route
    default:
      return state
  }
}
