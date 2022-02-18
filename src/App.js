import React, { useState, useEffect } from 'react';
import Header from './view/header/header.js';

import { initOnboard } from './service'



const App = () => {
    const [address, setAddress] = useState(null);


    return (
      <React.Fragment>
        <Header/>
      </React.Fragment>
  );
};

export default App;
