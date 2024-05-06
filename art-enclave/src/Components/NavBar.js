
import React from 'react';

const NavBar = ({ toggleDarkMode }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">Art Museum</h1>
      </div>
      <div>
        <button className="bg-gray-600 text-white px-2 py-1 ml-2 rounded" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
