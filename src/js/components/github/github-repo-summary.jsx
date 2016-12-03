import React from 'react';
import moment from 'moment';

const GithubRepoSummary = ({repo}) => (
  <div>
    <h3>{ repo.name }</h3>
    <div>
      <div>Language: { repo.language }</div>
      <div>Last Pushed: { moment(repo.pushed_at).fromNow() }</div>
    </div>
  </div>
);

export default GithubRepoSummary;
