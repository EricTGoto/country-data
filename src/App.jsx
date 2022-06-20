import React, { useState } from 'react';
import FilterInput from './components/FilterInput';
import Countries from './components/Countries';
import './styles.css';

function App() {
  const [filterInput, setFilterInput] = useState('');
  return (
    <div className="App">
      <FilterInput filterInput={filterInput} setFilterInput={setFilterInput} />
      { filterInput ? <Countries countryFilter={filterInput} /> : 'Type in a country' }
    </div>
  );
}

export default App;
