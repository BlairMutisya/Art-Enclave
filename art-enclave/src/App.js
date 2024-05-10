// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Location from './components/Location';
import Contact from './components/Contact';
import CollectionPage from './pages/CollectionPage'; 
import LoginRegisterPage from './pages/LoginRegisterPage'; // Import the login/register page
import NavBar from './components/NavBar'; 

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/login-register" element={<LoginRegisterPage />} /> // Define the route for login/register page
        </Routes>
      </div>
    </Router>
  );
}

export default App;
