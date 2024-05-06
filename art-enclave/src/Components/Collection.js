// Collection.js
import React from 'react';
import ArtCard from './ArtCard';

const Collection = ({ collection, removeFromCollection }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {collection.map((art) => (
        <ArtCard key={art.id} art={art} removeFromCollection={removeFromCollection} />
      ))}
    </div>
  );
};

export default Collection;
