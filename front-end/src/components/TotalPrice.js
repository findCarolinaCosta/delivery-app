import React from 'react';

export default function TotalPrice() {
  const { totalPrice } = JSON.parse(localStorage.getItem('cart'));
  return (
    <button
      type="button"
      className="checkout-button"
      onClick={ (e) => e.preventDefault() }
    >
      {`R$ ${Number(totalPrice).toFixed(2)}`}
    </button>
  );
}
