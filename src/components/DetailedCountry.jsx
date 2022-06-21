import React from 'react';
import Weather from './Weather';

function DetailedCountry({ country }) {
  function parseLanguages() {
    return (
      Object.values(country.languages)
    );
  }

  const languageList = () => parseLanguages().map((language) => <li>{language}</li>);

  const { latlng } = country;
  return (
    <div className="detailed-country">
      {country.name.common}
      {country.capital !== undefined ? country.capital[0] : 'None'}
      {`Population:${country.population}`}
      {`Area:${country.area}`}
      <h3>Languages:</h3>
      {languageList()}
      <img src={country.flags.svg} alt={`${country.name.common}'s flag'`} className="country-flag" />
      <Weather countryName={country.name.common} latlng={latlng} />
    </div>
  );
}

export default DetailedCountry;
