import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const status = {
  ENTREGUE: 'MARCAR COMO ENTREGUE',
};

export default function OrderDetailsMain({ index, name, quantity, price, subtotal }) {
  const location = useLocation();
  return (
    <div>
      {/* {location.pathname === '/customer/checkout' ? <h1>Finalizar Pedido</h1>
        : <h1>Detalhes do Pedido</h1>} */}
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
                <th>Item</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor unitário</th>
                <th>Sub-total</th>
              </tr>
            </thead>)}
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{subtotal}</td>
              <td>Remover</td>
            </tr>
          </tbody>
        </table>
      </div>
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
