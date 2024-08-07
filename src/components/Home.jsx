import React, { useState, useEffect } from "react";
import "../styles/styles.css";

const Home = () => {
  const [artworks, setArtworks] = useState([]);
  const [setCollection] = useState([]);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const response = await fetch(
        "https://openaccess-api.clevelandart.org/api/artworks/?limit=12"
      );
      const data = await response.json();
      setArtworks(data.data);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    }
  };

  const addToCollection = async (artwork) => {
    try {
      const response = await fetch("https://json-server-template-s4mp.onrender.com/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artwork),
      });
      if (response.ok) {
        // Update the collection state with the added artwork
        setCollection((prevCollection) => [...prevCollection, artwork]);
        alert("Artwork added to collection!");
      } else {
        alert("Failed to add artwork to collection.");
      }
    } catch (error) {
      console.error("Error adding artwork to collection:", error);
    }
  };

  // Function to handle redirection to login page
  const handleGetStarted = () => {
    window.location.href = "/login-register"; // Redirect to login page route
  };

  return (
    <div>
      {/* Welcome message */}
      <div className="welcome-message">
        <h1>
          <span className="half-red">Welcome to </span>{" "}
          <span className="half-grey">Art EnClave</span>
        </h1>
        <h2>The home of Artworks:</h2>
        <p>
          "Embark on a captivating journey through the halls of our esteemed art
          museum, where history and creativity converge to inspire. "
        </p>
      </div>

      {/* Get Started button */}
      <button className="get-started-button" onClick={handleGetStarted}>
        Get Started
      </button>

      {/* Artworks */}
      <div className="grid grid-cols-3 gap-4">
        {artworks.map((artwork, index) => (
          <div key={index} className="card">
            <img
              src={artwork.images.web.url}
              alt={artwork.title}
              className="w-full h-48 object-cover mb-2"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{artwork.title}</h2>
              <p className="text-sm text-gray-600">{artwork.creation_date}</p>
              <button
                className="button"
                onClick={() => addToCollection(artwork)}
              >
                Add to Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
