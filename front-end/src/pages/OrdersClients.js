import React, { useContext, useEffect, useState } from 'react';
import { genericApiResquest } from '../api';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import { UserContext } from '../context/UserProvider';

// TODO - todo o fluxo do cliente parece ser avaliado junto não tenho certeza by Carol
function OrdersClients() {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    genericApiResquest.get(`orders/clients/${user.id}`).then((response) => {
      setOrders(response.data);
    });
  }, [user.id]);

  return (
    <div className="bg-[#fff] h-screen">
      <Header />
      <div className="grid grid-flow-row grid-cols-2 h-full w-full">
        {orders.map((order, index) => (
          <OrderCard
            key={ order.id }
            order={ order }
            index={ index }
          />
        ))}
      </div>
    </div>
  );
}

export default OrdersClients;
