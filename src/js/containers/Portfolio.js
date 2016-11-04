import React from 'react';
import { connect } from 'react-redux';
import { ROUTE_STATES, setRouteState } from '../components/routing';
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
