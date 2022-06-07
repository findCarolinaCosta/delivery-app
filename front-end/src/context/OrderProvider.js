import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [isSellerPage, setIsSellerPage] = useState(false);

  const shared = {
    isSellerPage,
    setIsSellerPage,
    orders,
    setOrders,
  };

  return (
    <OrderContext.Provider value={ { ...shared } }>
      {children}
    </OrderContext.Provider>
  );
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OrderProvider;
