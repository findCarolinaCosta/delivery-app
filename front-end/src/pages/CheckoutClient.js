import React, { useContext } from 'react';
import Header from '../components/Header';
import TotalPrice from '../components/TotalPrice';
import { ProductsContext } from '../context/ProductsProvider';
import OrderDetailsMain from '../components/OrderDetailsMain';
import AddressClient from '../components/AddressClient';

function CheckoutClient() {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  // const { totalPrice } = localCart;

  const { cart, setCart } = useContext(ProductsContext);
  const removeAllItem = (id, subtotal) => {
    const newCart = cart.items.filter((item) => item.id !== id);
    setCart({ items: newCart, totalPrice: cart.totalPrice - subtotal });
    window.location.reload();
  };

  const renderTable = () => localCart.items.map((product, index) => {
    const { name, price, quantity, id } = product;
    return (
      <OrderDetailsMain
        key={ index }
        id={ id }
        removeAllItem={ removeAllItem }
        index={ index }
        name={ name }
        price={ price }
        quantity={ quantity }
        subtotal={ (price * quantity).toFixed(2) }
      />
    );
  });

  return (
    <div>
      <Header />
      <div>
        <h1>Finalizar Pedido</h1>
        <ul className="product-card-list">{renderTable()}</ul>
        <TotalPrice />
        <h1> Detalhes do Pedido e Endereço para Entrega </h1>
        <AddressClient />
      </div>
    </div>
  );
}
export default CheckoutClient;
