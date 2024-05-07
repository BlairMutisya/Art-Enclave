import React from 'react';
import '../styles/styles.css'; 
const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contact-card">
        <div className="contact-face contact-face-front">
          <div className="contact-content">
            <i className="contact-icon fas fa-envelope"></i>
          </div>
        </div>
        <div className="contact-face contact-face-back">
          <div className="contact-content">
            <h3>Email</h3>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-face contact-face-front">
          <div className="contact-content">
            <i className="contact-icon fas fa-phone"></i>
          </div>
        </div>
        <div className="contact-face contact-face-back">
          <div className="contact-content">
            <h3>Phone</h3>
            <p>+1 123 456 7890</p>
          </div>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-face contact-face-front">
          <div className="contact-content">
            <i className="contact-icon fas fa-map-marker"></i>
          </div>
        </div>
        <div className="contact-face contact-face-back">
          <div className="contact-content">
            <h3>Address</h3>
            <p>123 Street Name, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
