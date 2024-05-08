// Home.js
import React from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import NavBar from '../components/NavBar'; 

const Home = () => {
  return (
    <div>
      <NavBar /> {/* Render NavBar component inside Home */}
      <Search /> {/* Render Search component */}
      <Cards /> {/* Render Cards component */}
    </div>
  );
}

export default Home;
