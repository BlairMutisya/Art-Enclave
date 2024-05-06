// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ toggleDarkMode }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <Link to="/">Home</Link>
      <Link to="/location">Location</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/collection">My Collection</Link>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </nav>
  );
};

export default NavBar;
