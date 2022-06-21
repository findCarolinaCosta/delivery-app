import React from 'react';

export default function TotalPrice() {
  const { totalPrice } = JSON.parse(localStorage.getItem('cart'));
  return (
    <button
      type="button"
      data-testid="customer_checkout__element-order-total-price"
      className="checkout-button"
      onClick={ (e) => e.preventDefault() }
    >
      {`R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
    </button>
  );
}
