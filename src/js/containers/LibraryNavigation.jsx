import React from 'react';
import { Link } from 'react-router';

const LibraryNavigation = (props) => {
  return (
    <div>
      <div>
        <ul>
          <li><Link to='/library/author'>Authors</Link></li>
          <li><Link to='/library/book'>Books</Link></li>
        </ul>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default LibraryNavigation;
