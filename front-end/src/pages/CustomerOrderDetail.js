import React from 'react';
import Header from '../components/Header';
import OrderDetailsMain from '../components/OrderDetailsMain';

export default function CustomerOrderDetail() {
  return (
    <>
      <Header />
      <main className="w-screen p-[60px] bg-white">
        <OrderDetailsMain />
      </main>
    </>
  );
}
