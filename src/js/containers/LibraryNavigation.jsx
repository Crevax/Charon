import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class LibraryNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li><Link to='library/author'>Authors</Link></li>
            <li><Link to='library/book'>Books</Link></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

function select() {
  return {}
}

export default connect(select)(LibraryNavigation);
