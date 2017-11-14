import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { ROUTE_STATES, setRouteState } from '../components/routing';
import { displayAuthors, authorActionTypes, AuthorSummary } from '../components/library';
import { fetchResource, resourceFetchSucceeded, resourceFetchFailed } from '../resource-manager';
import { Loader } from '../components/animation';

function getAllAuthors() {

  return dispatch => {
    dispatch(fetchResource(authorActionTypes.GET_ALL_AUTHORS));
    request.get(`${process.env.API_HOST}/author`)
      .end((err, res) => {
        if (err || !res.ok) {
          dispatch(resourceFetchFailed(authorActionTypes.GET_ALL_AUTHORS, err));
        } else {
          dispatch(displayAuthors(res.body));
          dispatch(resourceFetchSucceeded(authorActionTypes.GET_ALL_AUTHORS));
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
    if (!this.props.resourceFetchStatus.hasOwnProperty(authorActionTypes.GET_ALL_AUTHORS)
      || this.props.resourceFetchStatus[authorActionTypes.GET_ALL_AUTHORS].progress === "BUSY")
    {
      return <Loader />
    }
    let authors = this.props.authors.map((author, idx) => {
      return (
        <div key={idx}>
          <AuthorSummary author={author} />
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
    authors: state.authors,
    resourceFetchStatus: state.resourceFetchStatus
  }
}

export default connect(select)(AuthorList);
