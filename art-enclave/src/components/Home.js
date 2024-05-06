// Home.js
import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';

const Home = () => {
  const [artworks, setArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      let fetchedArtworks = [];
      for (let page = 1; page <= 3; page++) {
        const response = await fetch(`https://api.harvardartmuseums.org/Image?apikey=5cac1dd2-ebbc-4567-873d-6ab86590f5e8&page=${page}`);
        const data = await response.json();
        fetchedArtworks = [...fetchedArtworks, ...data.records];
      }
      setArtworks(fetchedArtworks);
      setFilteredArtworks(fetchedArtworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  }

  const handleSearch = (query) => {
    const filtered = artworks.filter(artwork => {
      return artwork.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredArtworks(filtered);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Art EnClave</h1>
      <Search onSearch={handleSearch} />
      <div className="grid grid-cols-3 gap-4">
        {filteredArtworks.map(artwork => (
          <div key={artwork.id} className="bg-white p-1 rounded-md shadow-md">
            <img src={artwork.baseimageurl} alt={artwork.title} className="w-full h-24 object-cover mb-2" />
            <h2 className="text-lg font-semibold mb-1">{artwork.title}</h2>
            <p className="text-sm text-gray-600">{artwork.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
