import React, { useState, useEffect } from 'react';

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

  const addToCollection = async (artwork) => {
    // Check if the artwork is already in the collection
    if (collection.some(item => item.id === artwork.id)) {
      alert('Artwork is already added to the collection!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/collection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(artwork),
      });
      if (response.ok) {
        setCollection(prevCollection => [...prevCollection, artwork]);
        alert('Artwork added to collection!');
      } else {
        alert('Failed to add artwork to collection.');
      }
    } catch (error) {
      console.error('Error adding artwork to collection:', error);
    }
  };

  const removeFromCollection = async (id) => {
    try {
      await fetch(`http://localhost:3000/collection/${id}`, {
        method: 'DELETE',
      });
      setCollection(prevCollection => prevCollection.filter(item => item.id !== id));
      alert('Artwork removed from collection!');
    } catch (error) {
      console.error('Error removing artwork from collection:', error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {collection.map((artwork, index) => (
          <div key={index} className="card">
            {/* Optional chaining to handle potential undefined 'images' or 'web' */}
            {artwork.images?.web && (
              <img src={artwork.images.web.url} alt={artwork.title} className="w-full h-48 object-cover mb-2" />
            )}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{artwork.title}</h2>
              <p className="text-sm text-gray-600">{artwork.creation_date}</p>
              <button className="button" onClick={() => removeFromCollection(artwork.id)}>Remove from Collection</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
