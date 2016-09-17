import React from 'react';
import { connect } from 'react-redux';
import { getAllReposForUser } from './github-actions';

class GithubRepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getAllReposForUser('crevax'));
  }

  render() {
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
    repos: state.repos
  }
}

export default connect(select)(GithubRepoList);
