import React, { useState } from 'react';
import DetailedCountry from './DetailedCountry';
import SimpleCountry from './SimpleCountry';

function Country({ country, showDetailed }) {
  const [showDetails, setShowDetails] = useState(showDetailed);
  return (
    // eslint-disable-next-line max-len
    showDetails ? <DetailedCountry country={country} setShowDetails={setShowDetails} /> : <SimpleCountry country={country} setShowDetails={setShowDetails} />
  );
}

export default Country;
