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
      <Link to="/" className="navbar-logo">
        <img src="./assets/maya-svgrepo-com.png" alt="Logo" />
      </Link>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/About" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/collection" className="navbar-link">Collection</Link> {/* Changed link to Collection */}
        </li>
      </ul>
      <div className="navbar-icons">
        <i className="icon fas fa-shopping-cart" onClick={handleAddToCart}></i>
      </div>
    </nav>
  );
}

export default Navbar;
