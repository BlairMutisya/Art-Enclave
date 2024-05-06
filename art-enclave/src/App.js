// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Location from './components/Location';
import Contact from './components/Contact';
import NavBar from './components/NavBar'; // Import NavBar component

const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> {/* Render NavBar component outside of Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} /> {/* Correct path */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
