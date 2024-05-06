// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar';
import Home from './Components/Home'; // Import the Home component
import Location from './Components/Location';
import Contact from './Components/Contact';
import MyCollection from './Components/MyCollection';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [artPieces, setArtPieces] = useState([]); // State to store art pieces

  useEffect(() => {
    // Fetch art pieces from the API
    axios.get('https://api.harvardartmuseums.org/Object', {
      params: {
        apikey: '5cac1dd2-ebbc-4567-873d-6ab86590f5e8',
      },
    })
    .then(response => {
      setArtPieces(response.data.results); // Set the art pieces in state
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <NavBar toggleDarkMode={toggleDarkMode} />
      <Home artPieces={artPieces} /> {/* Pass the artPieces array as a prop to the Home component */}
      {/* Other routes/components */}
    </div>
  );
};

export default App;
