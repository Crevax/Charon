import React from 'react';
import { Link } from 'react-router';

const MainNavigation = (props) => {
  return (
    <div>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/library'>Library</Link></li>
        </ul>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default MainNavigation;
