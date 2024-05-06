// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Home from './Home';
import Location from './Location';
import Contacts from './Contacts';
import MyCollection from './MyCollection';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    // Fetch data from API and set collection state
    axios.get('https://api.harvardartmuseums.org/Object', {
      params: {
        apikey: '5cac1dd2-ebbc-4567-873d-6ab86590f5e8',
      },
    })
    .then(response => {
      setCollection(response.data.results);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCollection = (art) => {
    setCollection([...collection, art]);
  };

  const removeFromCollection = (id) => {
    setCollection(collection.filter(art => art.id !== id));
  };

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <NavBar toggleDarkMode={toggleDarkMode} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/location" component={Location} />
          <Route path="/contacts" component={Contacts} />
          <Route
            path="/collection"
            render={() => <MyCollection collection={collection} removeFromCollection={removeFromCollection} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
