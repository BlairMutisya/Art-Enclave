import React, { useState, useEffect } from 'react';
import Collection from './Collection';

const MyCollection = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetchCollection();
  }, []);
  
  const fetchCollection = async () => {
    try {
      const response = await fetch('http://localhost:3000/collection');
      if (!response.ok) {
        throw new Error('Failed to fetch collection');
      }
      const data = await response.json();
      setCollection(data);
    } catch (error) {
      console.error('Error fetching collection:', error);
      // Handle error: Display error message to the user
    }
  }
  
  const removeFromCollection = async (id) => {
    try {
      await fetch(`http://localhost:3000/collection/${id}`, {
        method: 'DELETE'
      });
      setCollection(collection.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing item from collection:', error);
    }
  }

  return (
    <div>
      <Collection collection={collection} removeFromCollection={removeFromCollection} />
    </div>
  );
}

export default MyCollection;
