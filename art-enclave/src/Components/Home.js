// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtCard from './ArtCard';

const Home = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get('https://api.harvardartmuseums.org/Object', {
      params: {
        apikey: '5cac1dd2-ebbc-4567-873d-6ab86590f5e8',
      },
    })
    .then(response => {
      // Set fetched artworks to state
      setArtworks(response.data.results);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8">Welcome to the Art Museum</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {artworks.map(artwork => (
          <ArtCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

export default Home;
