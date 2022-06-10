import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

const status = {
  ENTREGUE: 'MARCAR COMO ENTREGUE',
};

export default function OrderDetailsMain({ index, name, quantity, price, subtotal }) {
  const location = useLocation();
  return (
    <div>
      <table>
        {location.pathname === '/customer/checkout' ? null : (
          <thead>
            <tr>
              <th>{`Pedido ${'0003'}`}</th>
              <th>{`P. Vend: ${'Fulana Pereira'}`}</th>
              <th>07/04/2021</th>
              <th>ENTREGUE</th>
              <th>{status.ENTREGUE}</th>
            </tr>
          </thead>
        )}
        {index === 0 && (
          <thead>
            <tr>
              <th >Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor unitário</th>
              <th>Sub-total</th>
            </tr>
          </thead>)}
        <tbody>
          <tr>
            <td data-testid={
              `customer_checkout__element-order-table-item-number-${index}`
              } >{index + 1}</td>
            <td data-testid={
              `customer_checkout__element-order-table-name-${index}`
              }>{name}</td>
            <td data-testid={
              `customer_checkout__element-order-table-quantity-${index}`
              }>{quantity}</td>
            <td data-testid={
              `customer_checkout__element-order-table-unit-price-${index}`
              }>{price.replace('.', ',')}</td>
            <td data-testid={
              `customer_checkout__element-order-table-sub-total-${index}`
              }>{subtotal.replace('.', ',')}</td>
            {location.pathname === '/customer/checkout' && (
              <td>
                <button 
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                  }
                type="button">Remover</button>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

OrderDetailsMain.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  subtotal: PropTypes.string.isRequired,
};
