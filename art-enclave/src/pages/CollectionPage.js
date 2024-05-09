import React, { useState, useEffect } from 'react';

const CollectionPage = () => {
  const [collection, setCollection] = useState([]);
  const [newArtwork, setNewArtwork] = useState({ title: '', creation_date: '', url: '' });

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

  const addToCollection = async () => {
    try {
      const response = await fetch('http://localhost:3000/collection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArtwork),
      });
      if (response.ok) {
        const addedArtwork = await response.json();
        setCollection(prevCollection => [...prevCollection, addedArtwork]);
        setNewArtwork({ title: '', creation_date: '', url: '' }); // Clear form fields after adding artwork
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewArtwork(prevArtwork => ({
      ...prevArtwork,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCollection();
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

      {/* Add to Collection form */}
      <form onSubmit={handleSubmit} className="add-to-collection-form">
        <h2>Add to Collection</h2>
        <input type="text" name="title" value={newArtwork.title} onChange={handleChange} placeholder="Title" required />
        <input type="text" name="creation_date" value={newArtwork.creation_date} onChange={handleChange} placeholder="Creation Year" required />
        <input type="text" name="url" value={newArtwork.url} onChange={handleChange} placeholder="URL" required />
        <button type="submit">Add Artwork</button>
      </form>
    </div>
  );
};

export default CollectionPage;
