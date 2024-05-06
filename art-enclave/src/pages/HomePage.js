// Home.js
import React from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import NavBar from '../components/NavBar'; // Import NavBar component

const Home = () => {
  return (
    <div>
      <NavBar /> {/* Render NavBar component inside Home */}
      <h1 className="text-3xl font-bold mb-4">Art EnClave</h1>
      <Search /> {/* Render Search component */}
      <Cards /> {/* Render Cards component */}
    </div>
  );
}

export default Home;
