// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8">Welcome to the Art Museum</h1>
      <p className="mt-4">
        Discover the beauty of art at our museum, where creativity meets culture. 
        Explore our diverse collection of artworks spanning centuries and continents.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Featured Exhibition</h2>
        <p className="mt-2">
          Visit our latest exhibition "Art Through Time" showcasing masterpieces from around the world.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <ul className="mt-2">
          <li>Lecture Series: Understanding Modern Art - July 15th</li>
          <li>Art Workshop: Painting Techniques - July 22nd</li>
          <li>Gallery Talk: Renaissance Art - July 29th</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
