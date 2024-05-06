// Card.js
import React from 'react';

const Card = ({ art, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src={art.primaryimageurl} alt={art.title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{art.title}</h2>
        <p className="text-gray-600">{art.description}</p>
      </div>
      <div className="flex justify-end p-4">
        <button onClick={() => onDelete(art.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default Card;
