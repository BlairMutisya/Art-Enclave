import React from 'react';
import '../styles/styles.css'; // Import styles.css

const Cards = ({ artworks }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {artworks.map(artwork => (
        <div key={artwork.id} className="card">
          <img src={artwork.baseimageurl} alt={artwork.title} />
          <h2>{artwork.title}</h2>
          <p>{artwork.description}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;