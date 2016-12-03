import React from 'react';

const AuthorSummary = ({author}) => (
  <h3>{ author.FirstName } { author.LastName }</h3>
);

export default AuthorSummary;
