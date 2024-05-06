// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import ContactsPage from './pages/ContactsPage';
import CollectionPage from './pages/CollectionPage';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <NavBar />
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/location" component={LocationPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/collection" component={CollectionPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
