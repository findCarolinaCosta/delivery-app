import React, { useContext, useEffect, useState } from 'react';
import { genericApiResquest } from '../api';
import HeaderClients from '../components/HeaderClients';
import { MainContext } from '../context/MainProvider';

function OrdersClients() {
  const [orders, setOrders] = useState([]);
  const { userId } = useContext(MainContext);

  useEffect(() => {
    genericApiResquest.get(`orders/clients/${userId}`).then((response) => {
      setOrders([response.data]);
    });
  }, [userId]);

  return (
    <div>
      <HeaderClients />
      {orders.map((order) => (
        <section key={ order.id }>
          <div>
            <h3>Pedido</h3>
            <p>{order.deliveryNumber}</p>
          </div>
          <div>
            <h1>{order.status.toUpperCase()}</h1>
          </div>
          <div>
            <h2>{order.saleDate}</h2>
            <h2>{order.totalPrice}</h2>
          </div>
        </section>
      ))}
    </div>
  );
}

export default OrdersClients;
