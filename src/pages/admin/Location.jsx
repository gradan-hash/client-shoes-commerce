
import React, { useState, useEffect } from 'react';

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {latitude && longitude ? (
        <p>Your current location is: {latitude}, {longitude}</p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Location;
