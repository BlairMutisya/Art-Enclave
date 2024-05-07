import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Location from './components/Location';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import MyCollection from './components/MyCollection'; // Import MyCollection component

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mycollection" element={<MyCollection />} /> {/* Add route for MyCollection */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
