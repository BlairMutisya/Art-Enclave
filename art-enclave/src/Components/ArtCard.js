// ArtCard.js
import React from 'react';

const ArtCard = ({ artwork }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={artwork.primaryimageurl} alt={artwork.title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{artwork.title}</div>
        <p className="text-gray-700 text-base">{artwork.description}</p>
      </div>
    </div>
  );
};

export default ArtCard;
