import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MainContext = createContext();

function MainProvider({ children }) {
  const [teste, setTeste] = useState('teste123');

  const shared = {
    teste,
    setTeste,
  };

  return (
    <MainContext.Provider value={ { ...shared } }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
