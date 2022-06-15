import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { genericApiResquest } from '../api';
import { ProductsContext } from '../context/ProductsProvider';

export default function OrderDetailsMain() {
  const { pathname } = useLocation();
  const [sellerName, setSellerName] = useState('');
  const pathCheckout = '/customer/checkout';
  const [orders, setOrders] = useState([]);
  const verifyPath = pathname === pathCheckout;
  const { cart, setCart } = useContext(ProductsContext);
  const [isDelivered, setIsDelivered] = useState(false);
  const verifyPathDetail = pathname.includes('/customer/orders');

  const removeAllItem = (id, subtotal) => {
    const newCart = cart.items.filter((item) => item.id !== id);
    setCart({ items: newCart, totalPrice: cart.totalPrice - subtotal });
    window.location.reload();
  };

  useEffect(() => {
    const saleId = pathname.split('/')[3];
    if (pathname === `/customer/orders/${saleId}`) {
      genericApiResquest
        .get(`/orders/customer/details/${saleId}`)
        .then((res) => {
          setOrders([...res.data]);
        });
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === pathCheckout) {
      const localCart = JSON.parse(localStorage.getItem('cart'));
      setOrders(localCart.items);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== pathCheckout) {
      return orders[0] && genericApiResquest.get(`/user/${orders[0].sale.sellerId}`)
        .then((res) => {
          setIsDelivered(orders[0].sale.status === 'ENTREGUE');
          setSellerName(res.data.name);
        });
    }
  }, [orders, pathname]);

  return (
    <div>
      <table>
        {pathname !== pathCheckout && orders[0] && (
          <thead>
            <tr>
              <th
                data-testid={
                  verifyPathDetail
                  && 'customer_order_details__element-order-details-label-order-id'
                }
              >
                {`Pedido ${orders[0].sale.id}`}
              </th>
              <th
                data-testid={
                  verifyPathDetail
                   && 'customer_order_details__element-order-details-label-seller-name'
                }
              >
                {`P. Vend: ${sellerName}`}

              </th>
              <th
                data-testid={
                  verifyPathDetail
                   && 'customer_order_details__element-order-details-label-order-date'
                }
              >
                {/*
                data não vem no horário de brasilia, passa nos testes quando está no mesmo dia
                */}
                {orders[0].sale.saleDate}

              </th>
              <th
                data-testid={
                  verifyPathDetail
                  && 'customer_order_details__element-order-details-label-delivery-status'
                }
              >
                {orders[0].sale.status}

              </th>
              <th>
                <button
                  type="button"
                  data-testid="customer_order_details__button-delivery-check"
                  disabled={ !isDelivered }
                >
                  MARCAR COMO ENTREGUE
                </button>
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
          {orders && orders.map((order, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-item-number-${index}`
                    : `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-name-${index}`
                    : `customer_order_details__element-order-table-name-${index}`
                }
              >
                {verifyPath ? order.name : order.product.name}
              </td>
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-quantity-${index}`
                    : `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                {order.quantity}
              </td>
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-unit-price-${index}`
                    : `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                {verifyPath
                  ? order.price.replace('.', ',')
                  : order.product.price}
              </td>
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-sub-total-${index}`
                    : `customer_order_details__element-order-total-price-${index}`
                }
              >
                {verifyPath
                  ? (order.price * order.quantity).toFixed(2).replace('.', ',')
                  : (order.product.price * order.quantity).toFixed(2).replace('.', ',')}
              </td>
              { verifyPath
                && (
                  <td>
                    <button
                      onClick={ () => {
                        removeAllItem(order.id,
                          (order.price * order.quantity).toFixed(2));
                      } }
                      data-testid={
                        `customer_checkout__element-order-table-remove-${index}`
                      }
                      type="button"
                    >
                      Remover
                    </button>
                  </td>
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
