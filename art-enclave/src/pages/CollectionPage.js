// CollectionPage.js
import React, { useState, useEffect } from 'react';
import Collection from '../components/CollectionPage';
import '../styles/styles.css';
const CollectionPage = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    // Fetch collection data or initialize it as needed
  }, []);

  const addToCollection = (artwork) => {
    // Add artwork to the collection
    setCollection(prevCollection => [...prevCollection, artwork]);
  };

  const removeFromCollection = (id) => {
    // Remove artwork from the collection
    setCollection(prevCollection => prevCollection.filter(item => item.id !== id));
  };

  return (
    <Collection 
      collection={collection} 
      addToCollection={addToCollection} 
      removeFromCollection={removeFromCollection} 
    />
  );
};

export default CollectionPage;
