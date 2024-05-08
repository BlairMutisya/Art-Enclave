import React, { useState, useEffect } from 'react';
import AddToCollectionForm from './AddToCollectionForm';
import '../styles/styles.css'; // Import styles.css

const Home = () => {
  const [artworks, setArtworks] = useState([]);
  const [collection, setCollection] = useState([]);
  const [showAddToCollectionForm, setShowAddToCollectionForm] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const response = await fetch('https://openaccess-api.clevelandart.org/api/artworks/?limit=12');
      const data = await response.json();
      setArtworks(data.data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  const addToCollection = async (artworkData) => {
    try {
      const response = await fetch('http://localhost:3000/collection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(artworkData),
      });
      if (response.ok) {
        setCollection(prevCollection => [...prevCollection, artworkData]);
        alert('Artwork added to collection!');
        setShowAddToCollectionForm(false); // Close the form after adding to collection
      } else {
        alert('Failed to add artwork to collection.');
      }
    } catch (error) {
      console.error('Error adding artwork to collection:', error);
    }
  };

  const handleAddToCollectionClick = (artwork) => {
    setSelectedArtwork(artwork);
    setShowAddToCollectionForm(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login functionality (replace with actual logic)
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setShowLoginForm(false);
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setShowAddToCollectionForm(false);
    setShowLoginForm(false);
    alert('Logged out successfully!');
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="logout-button">Logout</button>
      ) : (
        <button onClick={() => setShowLoginForm(true)} className="login-button">Login</button>
      )}

      {showLoginForm && !isLoggedIn && (
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}

      <div className="grid grid-cols-3 gap-4">
        {artworks.map((artwork, index) => (
          <div key={index} className="card">
            <img src={artwork.images.web.url} alt={artwork.title} className="w-full h-48 object-cover mb-2" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{artwork.title}</h2>
              <p className="text-sm text-gray-600">{artwork.creation_date}</p>
              <button className="button" onClick={() => handleAddToCollectionClick(artwork)}>Add to Collection</button>
            </div>
          </div>
        ))}
      </div>

      {showAddToCollectionForm && selectedArtwork && (
        <AddToCollectionForm artwork={selectedArtwork} addToCollection={addToCollection} />
      )}
    </div>
  );
};

export default Home;
