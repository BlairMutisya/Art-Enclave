// Home.js
import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import '../styles/styles.css';
const Home = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const response = await fetch('https://openaccess-api.clevelandart.org/api/artworks/?limit=10');
      const data = await response.json();
      setArtworks(data.data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Art EnClave</h1>
      <div className="grid grid-cols-3 gap-4">
        {artworks.map((artwork, index) => (
          <div key={index} className="container">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h3>{artwork.title}</h3>
                  <i className="icon" aria-hidden="true"></i>
                </div>
              </div>
              <div className="face face2">
                <img src={artwork.images.web.url} alt={artwork.title} className="w-full h-24 object-cover mb-2" />
                <p className="text-sm text-gray-600">{artwork.creation_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
