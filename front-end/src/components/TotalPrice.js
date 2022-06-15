import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsProvider';

export default function TotalPrice() {
  const { cart: { totalPrice } } = useContext(ProductsContext);
  const { pathname } = useLocation();
  const pathCheckout = '/customer/checkout';
  const verifyPath = pathname === pathCheckout;
  return (
    <button
      type="button"
      data-testid={ verifyPath
        ? 'customer_checkout__element-order-total-price'
        : 'customer_order_details__element-order-total-price' }
      className="checkout-button"
    >
      {`R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
    </button>
  );
}
