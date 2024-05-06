// api.js
const API_KEY = '5cac1dd2-ebbc-4567-873d-6ab86590f5e8';

export const getArtPieces = async () => {
  const response = await fetch(`https://api.harvardartmuseums.org/Object?apikey=${API_KEY}`);
  const data = await response.json();
  return data.records;
};
