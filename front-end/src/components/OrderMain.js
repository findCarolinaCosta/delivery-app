import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { genericApiResquest } from '../api';
import { OrderContext } from '../context/OrderProvider';
import { UserContext } from '../context/UserProvider';
import Header from './Header';

const bgStatus = {
  pending: 'bg-[#d3c63c]', preparing: 'bg-[#87d53c]', delivered: 'bg-[#3bd5b0]' };

// TODO layout do card quebrando
function OrderMain() {
  const { orders, setOrders } = useContext(OrderContext);
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();
  const verifyPathSeller = pathname === '/seller/orders';
  const length = 4;

  useEffect(() => {
    if (pathname === '/customer/orders') {
      genericApiResquest.get(`orders/clients/${user.id}`).then((response) => {
        setOrders(response.data);
      });
    }
  }, [pathname, setOrders, user.id]);

  useEffect(() => {
    if (verifyPathSeller) {
      genericApiResquest.get(`/orders/seller/${user.id}`).then((response) => {
        setOrders(response.data);
      });
    }
  }, [pathname, setOrders, user.id, verifyPathSeller]);

  return (
    <div className="bg-[#fff] h-screen">
      <Header />
      <div className="grid grid-flow-row grid-cols-2 h-full w-full">
        {orders.map((order, index) => (
          <section key={ order.id }>
            <Link
              to={ `${pathname}/${order.id}` }
              className={ `mt-48 flex flex-row gap-5 
                  items-center ${index % 2 === 0 ? 'ml-40' : 'mr-40'} 
                  border-[#bec2c1] border-solid border-[1px] bg-[#eaf1ef] w-[600px] 
                  h-[120px]` }
            >
              <div
                className="text-center bg-white h-full flex flex-col
                    items-center w-[140px] justify-center font-normal text-[24px]
                    leading-[28.13px]"
              >
                <h3>Pedido</h3>
                <p
                  data-testid={ verifyPathSeller
                    ? `seller_orders__element-order-id-${order.id}`
                    : `customer_orders__element-order-id-${order.id}` }
                >
                  {String(order.id).padStart(length, '0')}
                </p>
              </div>
              <div
                className={ `bg-[#d3c63c] h-[105px] flex items-center w-[230px] 
                  justify-center rounded-md font-bold text-[22px] leading-[42.19px] 
                  ${order.status === 'PENDENTE' && bgStatus.pending} 
                  ${order.status === 'PREPARANDO' && bgStatus.preparing} 
                  ${order.status === 'ENTREGUE' && bgStatus.delivered}` }
              >
                <h1
                  data-testid={ verifyPathSeller
                    ? `seller_orders__element-delivery-status-${order.id}`
                    : `customer_orders__element-delivery-status-${order.id}` }
                >
                  {order.status === 'PENDENTE' && 'Pendente'}
                  {order.status === 'PREPARANDO' && 'Preparando'}
                  {order.status === 'ENTREGUE' && 'Entregue'}
                </h1>
              </div>
              <div className="flex flex-col gap-2 h-[105px] items-center justify-center">
                <div>
                  <h2
                    className="bg-[#f0fbf9] mt-auto mb-auto mr-6 ml-6 h-[40px] w-[140px]
                  rounded-[10px] font-bold text-[22px] text-center p-1"
                    data-testid={ verifyPathSeller
                      ? `seller_orders__element-order-date-${order.id}`
                      : `customer_orders__element-order-date-${order.id}` }
                  >
                    {order.saleDate}
                  </h2>
                  <h2
                    className="bg-[#f0fbf9] mb-auto h-[40px] w-[140px]
                    rounded-[10px] font-bold text-[22px] text-center p-1"
                    data-testid={ verifyPathSeller
                    && `seller_orders__element-card-price-${order.id}` }
                  >
                    {order.totalPrice}
                  </h2>
                </div>
                {verifyPathSeller
                && (
                  <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
                    {`${order.deliveryAddress}, ${order.deliveryNumber}`}

                  </p>
                )}
              </div>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}

export default OrderMain;
