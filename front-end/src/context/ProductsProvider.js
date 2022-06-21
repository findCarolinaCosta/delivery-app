import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { fetchProducts } from '../api';

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(localCart || { items: [], totalPrice: 0 });

  const [totalPrice, setTotalPrice] = useState(
    localCart ? localCart.totalPrice : 0,
  );

  const getProducts = async () => {
    const { data } = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getProducts();
  }, []);

  const shared = {
    products,
    setProducts,
    cart,
    setCart,
    totalPrice,
    setTotalPrice,
  };

  return (
    <ProductsContext.Provider value={ { ...shared } }>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;
