import React from 'react';

function FilterInput({ filterInput, setFilterInput }) {
  function handleChange(e) {
    const { value } = e.target;
    setFilterInput(value);
  }

  return (
    <input type="text" value={filterInput} onChange={handleChange} />
  );
}

export default FilterInput;
