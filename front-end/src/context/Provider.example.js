import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const MainContext = createContext();

function MainProvider({ children }) {
  const shared = {};

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
