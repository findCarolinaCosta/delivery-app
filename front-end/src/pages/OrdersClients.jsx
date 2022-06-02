import React from 'react';
import HeaderClients from '../components/HeaderClients';

function OrdersClients() {
  return (
    <div>
      <HeaderClients />
      <div>
        <h3>Pedido</h3>
        <p>00001</p>
      </div>
      <div>
        <h1>PENDENTE</h1>
      </div>
      <div>
        <h2>Data</h2>
        <h2>Valor</h2>
      </div>
    </div>
  );
}

export default OrdersClients;
