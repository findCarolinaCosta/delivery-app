import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

function UserProvider({ children }) {
  const localUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(localUser || {});

  const shared = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={ { ...shared } }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
