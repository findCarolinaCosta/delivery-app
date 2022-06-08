import React from 'react';

export default function TotalPrice() {
  const { totalPrice } = JSON.parse(localStorage.getItem('cart'));
  return (
    <button
      type="button"
      className="checkout-button"
    >
      {`R$ ${Number(totalPrice).toFixed(2)}`}
    </button>
  );
}
