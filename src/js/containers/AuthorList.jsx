import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { ROUTE_STATES, setRouteState } from '../components/routing';
import { GET_ALL_AUTHORS, displayAuthors } from '../components/library';
import { fetchResource, resourceFetchSucceeded, resourceFetchFailed } from '../resource-manager';

function getAllAuthors() {
  return dispatch => {
    dispatch(fetchResource(GET_ALL_AUTHORS));
    request.get('/api/author')
      .end((err, res) => {
        if (err || !res.ok) {
          dispatch(resourceFetchFailed(GET_ALL_AUTHORS, err));
        } else {
          dispatch(displayAuthors(res.body));
          dispatch(resourceFetchSucceeded(GET_ALL_AUTHORS));
        }
      });
  }
}


class AuthorList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(setRouteState(ROUTE_STATES.AUTHOR));
    this.props.dispatch(getAllAuthors());
  }

  render() {
    let authors = this.props.authors.map((author, idx) => {
      return (
        <div key={idx}>
          <h3>{ author.FirstName } { author.LastName }</h3>
        </div>
      )
    });

    return (
      <div>
        <h1>Authors</h1>
        { authors }
      </div>
    )
  }
}


function select(state) {
  return {
    routeState: state.RouteState,
    authors: state.authors
  }
}

export default connect(select)(AuthorList);
