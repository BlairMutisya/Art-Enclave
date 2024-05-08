import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa'; // Import icons from react-icons
import '../styles/styles.css'; // Import styles.css

const Navbar = () => {
  const handleAddToCart = () => {
    // Implement add to cart functionality
    alert('Item added to cart!');
  };

  const handleLogin = () => {
    // Implement login functionality
    alert('Login clicked!');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Art EnClave</Link> 
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
        <FaShoppingCart className="icon" onClick={handleAddToCart} /> {/* Shopping cart icon */}
        <FaSignInAlt className="icon" onClick={handleLogin} /> {/* Login icon */}
      </div>
    </nav>
  );
}

export default Navbar;
