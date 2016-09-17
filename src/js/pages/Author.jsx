import React from 'react';
import { connect } from 'react-redux';
import { ROUTE_STATES } from '../constants/route-states';
import { setRouteState } from '../actions/route-actions';

import { AuthorList } from '../containers';

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(setRouteState(ROUTE_STATES.AUTHOR));
  }

  render() {
    return (
      <div>
        <AuthorList />
      </div>
    )
  }
}


function select(state) {
  return {
    routeState: state.RouteState
  }
}

export default connect(select)(Author);
