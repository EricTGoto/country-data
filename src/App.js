import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountryData(response.data);
    });
  }, []);

  console.log(countryData);
  return (
    <div className="App">
      asd
    </div>
  );
}

export default App;
