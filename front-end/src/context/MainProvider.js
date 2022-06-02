import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MainContext = createContext();

function MainProvider({ children }) {
  const [teste, setTeste] = useState('teste123');
  const [clientName, setClientName] = useState('Nome do Cliente');

  const shared = {
    teste,
    setTeste,
    clientName,
    setClientName,
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
