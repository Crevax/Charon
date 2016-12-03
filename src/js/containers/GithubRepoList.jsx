import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { displayRepos , githubActionTypes, GithubRepoSummary } from '../components/github';
import { fetchResource, resourceFetchSucceeded, resourceFetchFailed } from '../resource-manager';
import { Loader } from '../components/animation';

const getAllReposForUser = (user) => {
  return dispatch => {
    dispatch(fetchResource(githubActionTypes.GET_REPOS));
    request.get(`https://api.github.com/users/${user}/repos`)
      .end((err, res) => {
        if (err || !res.ok) {
          dispatch(resourceFetchFailed(githubActionTypes.GET_REPOS, err));
        } else {
          dispatch(displayRepos(res.body));
          dispatch(resourceFetchSucceeded(githubActionTypes.GET_REPOS));
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
    if (!this.props.resourceFetchStatus.hasOwnProperty(githubActionTypes.GET_REPOS)
      || this.props.resourceFetchStatus[githubActionTypes.GET_REPOS].progress === "BUSY")
    {
      return <Loader />
    }
    let repos = this.props.repos.map((repo, idx) => {
      return (
        <div key={idx}>
          <GithubRepoSummary repo={repo} />
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
