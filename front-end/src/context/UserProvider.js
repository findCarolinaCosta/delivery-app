import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

function MainProvider({ children }) {
  const [user, setUser] = useState({});

  const shared = {
    user,
    setUser,
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={ { ...shared } }>
      {children}
    </UserContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
