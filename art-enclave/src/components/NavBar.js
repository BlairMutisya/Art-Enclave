import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/styles.css'; // Import styles.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contacts" className="navbar-link">Contacts</Link>
        </li>
        <li className="navbar-item">
          <Link to="/location" className="navbar-link">Location</Link>
        </li>
        <li className="navbar-item">
          <Link to="/mycollection" className="navbar-link">My Collection</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
