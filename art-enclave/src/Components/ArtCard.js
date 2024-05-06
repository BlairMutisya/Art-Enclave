// ArtCard.js
import React from 'react';

const ArtCard = ({ art, addToCollection, removeFromCollection }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 m-4">
      <img src={art.imageUrl} alt={art.title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{art.title}</h2>
      <p className="text-gray-600">{art.description}</p>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => addToCollection(art)}>
          Add to Collection
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => removeFromCollection(art.id)}>
          Remove from Collection
        </button>
      </div>
    </div>
  );
};

export default ArtCard;
