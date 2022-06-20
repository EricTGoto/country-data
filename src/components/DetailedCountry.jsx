import React from 'react';

function DetailedCountry({ country }) {
  function parseLanguages() {
    return (
      Object.values(country.languages)
    );
  }

  const languageList = () => parseLanguages().map((language) => <li>{language}</li>);

  return (
    <div className="detailed-country">
      {country.name.common}
      {country.capital[0]}
      {`Population:${country.population}`}
      {`Area:${country.area}`}
      <h3>Languages:</h3>
      {languageList()}
      <img src={country.flags.svg} alt={`${country.name.common}'s flag'`} className="country-flag" />
    </div>
  );
}

export default DetailedCountry;
