import React from 'react';
import { connect } from 'react-redux';

import GithubRepoList from '../containers/GithubRepoList';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Render home page!');
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

export default connect(select)(Home);
