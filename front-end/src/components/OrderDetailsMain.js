import React from 'react';

const status = {
  ENTREGUE: 'MARCAR COMO ENTREGUE',
};

export default function OrderDetailsMain() {
  return (
    <div>
      <h1>Detalhes do Pedido</h1>
      <div>
        <table>
          <tr>
            <th>{`Pedido ${'0003'}`}</th>
            <th>{`P. Vend: ${'Fulana Pereira'}`}</th>
            <th>07/04/2021</th>
            <th>ENTREGUE</th>
            <th>{status.ENTREGUE}</th>
          </tr>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Cerveja</td>
            <td>1</td>
            <td>R$3,40</td>
            <td>R$3,40</td>
          </tr>
        </table>
      </div>
      <button
        type="button"
        className="checkout-button"
      >
        {`Total: R$ ${'28,26'}`}
      </button>
    </div>
  );
}
