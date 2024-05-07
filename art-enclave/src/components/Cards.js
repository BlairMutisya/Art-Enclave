import React, { useState } from 'react';
import '../styles/styles.css';
const Cards = ({ artworks, addToCollection }) => {
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (artworkId) => {
    addToCollection(artworkId);
    setAddedToCart(prevState => ({ ...prevState, [artworkId]: true }));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {artworks.map(artwork => (
        <div key={artwork.id} className="card">
          <img src={artwork.baseimageurl} alt={artwork.title} />
          <h2>{artwork.title}</h2>
          <p>{artwork.description}</p>
          <button onClick={() => handleAddToCart(artwork.id)}>
            Add to Cart
            {addedToCart[artwork.id] && <i className="fas fa-check-circle"></i>}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
