import React from 'react';
import Collection from './Collection';

const MyCollection = ({ collection, removeFromCollection }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8">My Collection</h1>
      <Collection collection={collection} removeFromCollection={removeFromCollection} />
    </div>
  );
};

export default MyCollection;
