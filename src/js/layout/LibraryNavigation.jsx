import React from 'react';
import { NavLink } from 'react-router-dom';

const LibraryNavigation = (props) => {
  return (
    <div>
      <div>
        <ul>
          <li><NavLink to='/library/author'>Authors</NavLink></li>
          <li><NavLink to='/library/book'>Books</NavLink></li>
        </ul>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default LibraryNavigation;
