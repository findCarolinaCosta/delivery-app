import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function CustomerProvider({ children }) {
  // const [customers, setCustomers] = useState([]);
  const [productInCart, setProductInCart] = useState([]);
  const contextCustomer = { productInCart, setProductInCart };
  return (
    <CustomerProvider.Provider value={ { contextCustomer } }>
      {children}
    </CustomerProvider.Provider>
  );
}
CustomerProvider.propTypes = { children: PropTypes.node.isRequired };
