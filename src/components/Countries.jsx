import React, { useState, useEffect } from 'react';
import Country from './Country';
import CountryData from '../services/CountryData';

function Countries({ countryFilter }) {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    CountryData
      .getAllCountryData()
      .then((data) => setCountryData(data));
  }, []);

  function filterCountries() {
    if (countryData.length !== 0) {
      return (
        // eslint-disable-next-line max-len
        countryData.filter((country) => country.name.common.toLowerCase().includes(countryFilter.toLowerCase()))
      );
    }
    return [];
  }

  const filteredCountries = filterCountries();

  const countriesList = () => {
    if (filteredCountries.length === 1) {
      return <Country country={filteredCountries[0]} showDetailed={true} />;
    // eslint-disable-next-line no-else-return
    } else if (filteredCountries.length <= 10) {
      // eslint-disable-next-line max-len
      return filteredCountries.map((singleCountry) => <Country country={singleCountry} showDetailed={false} />);
    // eslint-disable-next-line no-else-return
    } else {
      return 'Please narrow your search';
    }
  };

  return (
    <div>
      {countriesList()}
    </div>
  );
}

export default Countries;
