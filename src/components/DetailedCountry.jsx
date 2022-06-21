import React from 'react';
import Weather from './Weather';

function DetailedCountry({ country, setShowDetails }) {
  function parseLanguages() {
    return (
      Object.values(country.languages)
    );
  }

  const languageList = () => parseLanguages().map((language) => <li>{language}</li>);

  const { latlng } = country;
  return (
    <div className="detailed-country">
      <div className="country-name">{country.name.common}</div>
      <button type="button" onClick={() => setShowDetails((prevShowDetails) => !prevShowDetails)}>Hide</button>
      <div className="country-capital">{`Capital: ${country.capital !== undefined ? country.capital[0] : 'None'}`}</div>
      <div>{`Population: ${country.population}`}</div>
      <div>{`Area: ${country.area}km^2`}</div>
      <h3>Languages:</h3>
      <ul>{languageList()}</ul>
      <img src={country.flags.svg} alt={`${country.name.common}'s flag'`} className="country-flag" />
      <Weather countryName={country.name.common} latlng={latlng} />
    </div>
  );
}

export default DetailedCountry;
