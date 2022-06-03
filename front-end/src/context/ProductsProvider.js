import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchProducts } from '../api';

export const ProductsContext = createContext();

function MainProvider({ children }) {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(localCart ? localCart.totalPrice : 0);

  const createCart = () => {
    const cart = { items: [], totalPrice: 0 };
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const getProducts = async () => {
    const { data } = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
    if (!localCart) createCart();
    getProducts();
  }, [localCart]);

  const shared = {
    products,
    setProducts,
    totalPrice,
    setTotalPrice,
  };

  return (
    <ProductsContext.Provider value={ { ...shared } }>
      {children}
    </ProductsContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
