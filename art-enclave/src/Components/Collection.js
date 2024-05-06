// Collection.js
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getArtPieces } from '../utils/api';

const Collection = () => {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    getArtPieces().then(data => setArtPieces(data));
  }, []);

  const handleDelete = (id) => {
    // Implement delete functionality
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">My Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {artPieces.map(art => (
          <Card key={art.id} art={art} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
