import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class MainNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
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

export default connect(select)(MainNavigation);
