import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const MainContext = createContext();

function MainProvider({ children }) {
  const [teste, setTeste] = useState('teste123');
  const [clientName, setClientName] = useState('Nome do Cliente');
  const [userId, setUserId] = useState('1');

  const shared = {
    teste,
    setTeste,
    clientName,
    setClientName,
    userId,
    setUserId,
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
