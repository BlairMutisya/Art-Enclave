// Search.js
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="border border-gray-400 rounded-md px-2 py-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">Search</button>
    </form>
  );
}

export default Search;
