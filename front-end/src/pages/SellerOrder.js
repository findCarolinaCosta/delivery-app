import React, { useContext } from 'react';
import OrderMain from '../components/OrderMain';
import { OrderContext } from '../context/OrderProvider';

export default function SellerOrder() {
  const { setIsSellerPage } = useContext(OrderContext);

  return (
    <main>
      <OrderMain setSellerPage={ () => setIsSellerPage(true) } />
    </main>
  );
}
