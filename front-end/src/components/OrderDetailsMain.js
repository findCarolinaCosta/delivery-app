import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { genericApiResquest } from '../api';
import { ProductsContext } from '../context/ProductsProvider';
import '../styles/OrderDetailsMain.css';
import TotalPrice from './TotalPrice';

const bgStatus = {
  pending: 'bg-[#d3c63c]', preparing: 'bg-[#87d53c]', delivered: 'bg-[#3bd5b0]' };

export default function OrderDetailsMain() {
  const { pathname } = useLocation();
  const [sellerName, setSellerName] = useState('');
  const pathCheckout = '/customer/checkout';
  const [orders, setOrders] = useState([]);
  const verifyPath = pathname === pathCheckout;
  const { cart, setCart } = useContext(ProductsContext);
  const [isDelivered, setIsDelivered] = useState(false);
  const verifyPathDetail = pathname.includes('/customer/orders');
  const length = 4;

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
      <table className="w-[90%] m-auto border-2 border-[#cdd9d6] border-b-4">
        {pathname !== pathCheckout && orders[0] && (
          <thead>
            <tr className="grid grid-flow-col h-[70px] bg-[#E5E5E5] text-[20px]">
              <th
                data-testid={
                  verifyPathDetail
                  && 'customer_order_details__element-order-details-label-order-id'
                }
                className="m-auto font-black"
              >
                {`Pedido ${String(orders[0].sale.id).padStart(length, '0')}`}
              </th>
              <th
                data-testid={
                  verifyPathDetail
                   && 'customer_order_details__element-order-details-label-seller-name'
                }
                className="m-auto font-normal leading-8 text-[20px]"
              >
                {`P. Vend: ${sellerName}`}

              </th>
              <th
                data-testid={
                  verifyPathDetail
                   && 'customer_order_details__element-order-details-label-order-date'
                }
                className="m-auto font-bold bg-[#F2FFFC] rounded-[10px]
                pl-8 pr-8 leading-[50px]"
              >
                {orders[0].sale.saleDate}

              </th>
              <th
                data-testid={
                  verifyPathDetail
                  && 'customer_order_details__element-order-details-label-delivery-status'
                }
                className={ `m-auto rounded-[10px] font-bold leading-[50px]
                pt- pb- pl-11 pr-11 text-[28px]
                ${orders[0].sale.status === 'Pendente' && bgStatus.pending} 
                ${orders[0].sale.status === 'Preparando' && bgStatus.preparing} 
                ${orders[0].sale.status === 'Entregue' && bgStatus.delivered}` }
              >
                {orders[0].sale.status}

              </th>
              <th className="m-auto">
                <button
                  type="button"
                  data-testid="customer_order_details__button-delivery-check"
                  disabled={ !isDelivered }
                  className="bg-[#036b52] text-white text-[
36px]
                  m-auto rounded-[10px] pl-3 pr-3
                  cursor-pointer leading-[50px] min-w-max"
                >
                  MARCAR COMO ENTREGUE
                </button>
              </th>
            </tr>
          </thead>
        )}
        <thead>
          <tr
            className="grid grid-flow-col grid-cols-custom h-[35px]
            p-2 text-[#001813]"
          >
            <th className="font-normal">Item</th>
            <th className="font-normal">Descrição</th>
            <th className="font-normal">Quantidade</th>
            <th className="min-w-max font-normal">Valor unitário</th>
            <th className="min-w-max font-normal">Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map((order, index) => (
            <tr
              key={ index }
              className="grid grid-flow-col grid-cols-custom p-2 leading-10"
            >
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-item-number-${index}`
                    : `customer_order_details__element-order-table-item-number-${index}`
                }
                className="w-full text-center bg-[#2fc18c]
                rounded-tl-[10px]
                rounded-bl-[10px] text-[20px] max-w-[60px] min-w-fit"
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-name-${index}`
                    : `customer_order_details__element-order-table-name-${index}`
                }
                className="bg-[#eaf1ef] w-full
                pl-2"
              >
                {verifyPath ? order.name : order.product.name}
              </td>
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-quantity-${index}`
                    : `customer_order_details__element-order-table-quantity-${index}`
                }
                className="text-center bg-[#036b52] min-w-fit
                text-white text-[20px]"
              >
                {order.quantity}
              </td>
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-unit-price-${index}`
                    : `customer_order_details__element-order-table-sub-total-${index}`
                }
                className="text-center bg-[#421981] min-w-fit
                text-white text-[20px]"
              >
                {`R$ ${
                  verifyPath
                    ? order.price.replace('.', ',')
                    : order.product.price}`}
              </td>
              <td
                data-testid={
                  verifyPath
                    ? `customer_checkout__element-order-table-sub-total-${index}`
                    : `customer_order_details__element-order-total-price-${index}`
                }
                className={
                  `text-center bg-[#056cf9] min-w-fit
                text-white text-[20px]
                  ${verifyPathDetail && (
              'rounded-tr-[10px] rounded-br-[10px]'
            )}`
                }
              >
                {`R$ ${
                  verifyPath
                    ? (order.price * order.quantity).toFixed(2).replace('.', ',')
                    : (order.product.price * order.quantity).toFixed(2).replace('.', ',')
                }`}
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
        {verifyPathDetail && (<TotalPrice />) }
      </table>
    </div>
  );
}
