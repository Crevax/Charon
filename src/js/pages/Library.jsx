import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { ROUTE_STATES } from '../constants/route-states';
import { setRouteState } from '../actions/route-actions';

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
        <ul>
          <li><Link to='/library/authors'>Authors</Link></li>
          <li><Link to='/library/books'>Books</Link></li>
        </ul>
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
