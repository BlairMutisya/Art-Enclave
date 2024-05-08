import React from 'react';
import '../styles/styles.css'; 

const Contacts = () => {
  return (
    <div className="contacts-container"> {/* Change class name to match the updated CSS */}
      <div className="contact-card">
        <div className="contact-face contact-face1">
          <div className="contact-content">
            <div className="contact-icon">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="contact-face contact-face2">
          <div className="contact-content">
            <h3>Email</h3>
            <p>tonnyblair09@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-face contact-face1">
          <div className="contact-content">
            <div className="contact-icon">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="contact-face contact-face2">
          <div className="contact-content">
            <h3>Phone</h3>
            <p>+44 978 653 3425</p>
          </div>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-face contact-face1">
          <div className="contact-content">
            <div className="contact-icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="contact-face contact-face2">
          <div className="contact-content">
            <h3>Address</h3>
            <p>468 Silicon Valley Avenue ,Northern California</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
