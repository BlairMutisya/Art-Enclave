// AddToCollectionForm.js
import React, { useState } from 'react';

const AddToCollectionForm = ({ artwork, addToCollection }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCollection({ ...formData, artworkId: artwork.id });
    setFormData({ title: '', artist: '', image: '' });
  };

  return (
    <div className="form-popup">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={formData.artist}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="form-input"
          required
        />
        <button type="submit" className="form-submit">Add to Collection</button>
      </form>
    </div>
  );
};

export default AddToCollectionForm;
