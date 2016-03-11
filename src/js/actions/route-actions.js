import { ROUTE_CHANGE } from '../constants/route-states'

export function setRouteState(route) {
  return {
    type: ROUTE_CHANGE,
    route: route
  }
}
