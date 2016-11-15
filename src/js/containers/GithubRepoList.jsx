import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { displayRepos , GET_REPOS } from '../components/github';
import { fetchResource, resourceFetchSucceeded, resourceFetchFailed } from '../resource-manager';
import { Loader } from '../components/animation';

const getAllReposForUser = (user) => {
  return dispatch => {
    dispatch(fetchResource(GET_REPOS));
    request.get(`https://api.github.com/users/${user}/repos`)
      .end((err, res) => {
        if (err || !res.ok) {
          dispatch(resourceFetchFailed(GET_REPOS, err));
        } else {
          dispatch(displayRepos(res.body));
          dispatch(resourceFetchSucceeded(GET_REPOS));
        }
      });
  }
};

class GithubRepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getAllReposForUser('crevax'));
  }

  render() {
    if (!this.props.resourceFetchStatus.hasOwnProperty(GET_REPOS)
      || this.props.resourceFetchStatus[GET_REPOS].progress === "BUSY")
    {
      return <Loader />
    }
    let repos = this.props.repos.map((repo, idx) => {
      return (
        <div key={idx}>
          <h3>{ repo.name }</h3>
        </div>
      )
    });

    return (
      <div className='github-repo-list'>
        <h2>Crevax</h2>
        { repos }
      </div>
    )
  }
}

function select(state) {
  return {
    repos: state.repos,
    resourceFetchStatus: state.resourceFetchStatus
  }
}

export default connect(select)(GithubRepoList);
