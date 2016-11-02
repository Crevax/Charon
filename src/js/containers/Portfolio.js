import React from 'react';
import { connect } from 'react-redux';
import { ROUTE_STATES } from '../constants/route-states';
import { setRouteState } from '../actions/route-actions';

import { GithubRepoList } from '../components/github';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(setRouteState(ROUTE_STATES.PORTFOLIO));
  }

  render() {
    return (
      <div>
        <GithubRepoList />
      </div>
    )
  }
}


function select(state) {
  return {
    routeState: state.RouteState
  }
}

export default connect(select)(Portfolio);
