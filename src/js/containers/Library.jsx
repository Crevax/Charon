import React from 'react';
import { connect } from 'react-redux';
import { ROUTE_STATES, setRouteState } from '../components/routing';

class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(setRouteState(ROUTE_STATES.LIBRARY));
  }

  render() {
    return (
      <div>
        <h1>Reading is good!</h1>
      </div>
    )
  }
}


function select(state) {
  return {
    routeState: state.RouteState
  }
}

export default connect(select)(Library);
