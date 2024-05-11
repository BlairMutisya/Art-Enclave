import React from 'react';
import Cards from '../components/Cards';
import NavBar from '../components/NavBar'; 

const Home = () => {
  return (
    <div>
      <NavBar /> {/* Render NavBar component inside Home */}
      <Cards /> {/* Render Cards component */}
    </div>
  );
}

export default Home;
