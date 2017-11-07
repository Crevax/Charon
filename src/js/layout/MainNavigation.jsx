import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/library'>Library</Link></li>
      </ul>
    </div>
  )
}

export default MainNavigation;
