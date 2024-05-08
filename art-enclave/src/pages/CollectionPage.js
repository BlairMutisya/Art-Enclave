import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection';

const CollectionPage = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetchCollection();
  }, []);

  const fetchCollection = async () => {
    try {
      const response = await fetch('http://localhost:3000/collection');
      const data = await response.json();
      setCollection(data);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
  };

  const removeFromCollection = async (id) => {
    try {
      await fetch(`http://localhost:3000/collection/${id}`, {
        method: 'DELETE',
      });
      setCollection(collection.filter(item => item.id !== id));
      alert('Artwork removed from collection!');
    } catch (error) {
      console.error('Error removing artwork from collection:', error);
    }
  };

  return (
    <Collection collection={collection} removeFromCollection={removeFromCollection} />
  );
};

export default CollectionPage;
