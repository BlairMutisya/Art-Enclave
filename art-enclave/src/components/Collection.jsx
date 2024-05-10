import React from 'react';

const Collection = ({ collection, removeFromCollection }) => {
  return (
    <div className="collection">
      {collection.map(artwork => (
        <div key={artwork.id} className="collection-item">
          <img src={artwork.image} alt={artwork.name} className="artwork-image" />
          <div className="artwork-info">
            <p className="artwork-name">{artwork.name}</p>
            <p className="artwork-artist">{artwork.artist}</p>
          </div>
          <button onClick={() => removeFromCollection(artwork.id)} className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Collection;
