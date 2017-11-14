import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <div>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink to='/library'>Library</NavLink></li>
      </ul>
    </div>
  )
}

export default MainNavigation;
