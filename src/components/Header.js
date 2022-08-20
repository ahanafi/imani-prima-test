import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <h2><NavLink to='/'>Word Counter</NavLink></h2>
      <h2><NavLink to='/movie'>Movie Finder</NavLink></h2>
    </header>
  );
}

export default Header;