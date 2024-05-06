import React from 'react';

const Location = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8">Location</h1>
      <p className="mt-4">
        Our museum is located in the heart of the city, at the following address:
      </p>
      <address className="mt-4">
        123 Art Street<br />
        Cityville, Countryland<br />
        Postal Code: 12345
      </address>
      <p className="mt-4">
        We are open every day from 9:00 AM to 6:00 PM.
      </p>
    </div>
  );
};

export default Location;
