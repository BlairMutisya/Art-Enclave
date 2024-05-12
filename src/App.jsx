// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CollectionPage from './pages/CollectionPage'; 
import LoginRegisterPage from './pages/LoginRegisterPage'; 
import NavBar from './components/NavBar'; 


const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
