import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; // Import styles.css

const Navbar = () => {
  const handleAddToCart = () => {
    // Implement add to cart functionality
    alert('Item added to cart!');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo"></Link>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/mycollection" className="navbar-link">My Collection</Link>
        </li>
      </ul>
      <div className="navbar-icons">
        <i className="icon fas fa-user"></i>
        <i className="icon fas fa-shopping-cart" onClick={handleAddToCart}></i>
      </div>
    </nav>
  );
}

export default Navbar;