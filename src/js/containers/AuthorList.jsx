import React from 'react';
import { connect } from 'react-redux';
import { getAllAuthors } from '../components/library';

class AuthorList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
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
    authors: state.authors
  }
}

export default connect(select)(AuthorList);
