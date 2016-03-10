import React from 'react';
import { connect } from 'react-redux';

import GithubRepoList from '../containers/GithubRepoList';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GithubRepoList />
      </div>
    )
  }
}


function select() {
  return {}
}

export default connect(select)(Portfolio);
