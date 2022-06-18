import React from 'react';
import AddressClient from '../components/AddressClient';
import Header from '../components/Header';
import OrderDetailsMain from '../components/OrderDetailsMain';
import TotalPrice from '../components/TotalPrice';

function CheckoutClient() {
  return (
    <div>
      <Header />
      <div>
        <h1>Finalizar Pedido</h1>
        <ul>
          <OrderDetailsMain />
        </ul>
        <TotalPrice />
        <h1> Detalhes do Pedido e Endereço para Entrega </h1>
        <AddressClient />
      </div>
    </div>
  );
}
export default CheckoutClient;
