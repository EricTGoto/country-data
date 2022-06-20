import React from 'react';

function SimpleCountry({ country, setShowDetails }) {
  return (
    <div className="simple-country">
      <span>{country.name.common}</span>
      <button type="button" onClick={() => setShowDetails((prevShowDetails) => !prevShowDetails)}>Show Details</button>
    </div>
  );
}

export default SimpleCountry;
