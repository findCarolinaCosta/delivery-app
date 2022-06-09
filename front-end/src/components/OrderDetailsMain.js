import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { genericApiResquest } from '../api';

const status = {
  ENTREGUE: 'MARCAR COMO ENTREGUE',
};

export default function OrderDetailsMain() {
  const { pathname } = useLocation();
  const [sellerName, setSellerName] = useState('');
  const pathCheckout = '/customer/checkout';
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (pathname !== pathCheckout) {
      const saleId = pathname.split('/')[3];
      genericApiResquest
        .get(`/orders/customer/details/${saleId}`)
        .then((res) => {
          setOrders(res.data);
        });
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== pathCheckout) {
      return orders === 0 && genericApiResquest.get(`/user/${orders[0].sale.sellerId}`)
        .then((res) => {
          setSellerName(res.data.name);
        });
    }
  }, [orders, pathname]);

  if (orders.length === 0) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <table>
        {pathname !== pathCheckout && (
          <thead>
            <tr>
              <th>{`Pedido ${orders[0].sale.id}`}</th>
              <th>{`P. Vend: ${sellerName}`}</th>
              <th>{orders[0].sale.saleDate}</th>
              <th>{(orders[0].sale.status).toUpperCase()}</th>
              <th>
                <button type="button">MARCAR COMO ENTREGUE</button>
              </th>
            </tr>
          </thead>
        )}
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(({ product: { name, price }, quantity }, index) => (
            <tr key={ index }>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{(price * quantity).toFixed(2)}</td>
              { pathname === pathCheckout && <td>Remover</td> }
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}
