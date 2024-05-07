// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Location from './components/Location';
import Contact from './components/Contact';
import CollectionPage from './pages/CollectionPage'; // Import CollectionPage component
import NavBar from './components/NavBar'; // Import NavBar component

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<CollectionPage />} /> {/* Define route for CollectionPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
