import axios from 'axios';

function getAllCountryData() {
  return axios
    .get('https://restcountries.com/v3.1/all')
    .then((response) => response.data);
}

export default { getAllCountryData };
