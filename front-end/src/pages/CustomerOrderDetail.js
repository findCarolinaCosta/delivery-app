import React from 'react';
import Header from '../components/Header';
import OrderDetailsMain from '../components/OrderDetailsMain';
import TotalPrice from '../components/TotalPrice';

export default function CustomerOrderDetail() {
  return (
    <>
      <Header />
      <main>
        <OrderDetailsMain />
        <TotalPrice />
      </main>
    </>
  );
}
