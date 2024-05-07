import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import NavBar from '../components/NavBar';
import '../styles/styles.css';

const Home = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const response = await fetch('https://openaccess-api.clevelandart.org/api/artworks/?limit=12');
      const data = await response.json();
      console.log(data); // Log the response to check the structure and image URLs
      setArtworks(data.data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  const addToCollection = async (artwork) => {
    try {
      const response = await fetch('http://localhost:3000/collection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(artwork),
      });
      if (response.ok) {
        alert('Artwork added to collection!');
      } else {
        alert('Failed to add artwork to collection.');
      }
    } catch (error) {
      console.error('Error adding artwork to collection:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <Search />
      <Cards artworks={artworks} addToCollection={addToCollection} />
    </div>
  );
}

export default Home;
