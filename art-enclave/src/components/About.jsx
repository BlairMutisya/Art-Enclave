import React from 'react';
import '../styles/styles.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our art museum!</p>
      <p>
        Our museum is dedicated to preserving and celebrating the rich tapestry of human creativity. With a diverse collection spanning centuries and continents, we offer visitors a journey through the history of art, from ancient artifacts to contemporary masterpieces. Our mission is to inspire, educate, and engage audiences of all ages, fostering a deeper appreciation for the beauty, complexity, and significance of artistic expression. Whether you're a seasoned art enthusiast or a curious newcomer, we invite you to explore our galleries, attend our events, and immerse yourself in the world of museum art.
      </p>
      <div className="info-section">
        <h2>Opening Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
      </div>
      <div className="info-section">
        <h2>Mission</h2>
        <p>Our mission is to promote art appreciation and education through our diverse collection and engaging exhibitions.</p>
      </div>
      <div className="info-section">
        <h2>Vision</h2>
        <p>Our vision is to become a leading cultural institution that inspires creativity, fosters innovation, and enriches the community.</p>
      </div>
      <div className="info-section">
        <h2>Appreciation to Artists</h2>
        <p>We extend our heartfelt appreciation to all the talented artists who have contributed their works to our museum, enriching our collection and inspiring our visitors.</p>
      </div>
      <div className="info-section">
        <h2>Exhibition Dates</h2>
        <p>Visit our museum to explore our current exhibitions and experience the beauty and creativity of art!</p>
      </div>
    </div>
  );
};

export default About;
