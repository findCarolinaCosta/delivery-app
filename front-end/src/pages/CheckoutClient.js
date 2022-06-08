import React, { useContext } from 'react';
import Header from '../components/Header';
import TotalPrice from '../components/TotalPrice';
import { ProductsContext } from '../context/ProductsProvider';
import OrderDetailsMain from '../components/OrderDetailsMain';
import AddressClient from '../components/AddressClient';

function CheckoutClient() {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const { products } = useContext(ProductsContext);
  const { totalPrice } = localCart;

  const renderTable = () => localCart.items.map((product, index) => {
    const { id, name, price, quantity } = product;
    return (
      <OrderDetailsMain
        key={ id }
        index={ index }
        name={ name }
        price={ price }
        quantity={ quantity }
        subtotal={ (price * quantity).toFixed(2) }
        totalPrice={ totalPrice }
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
        {/* <AddressClient /> */}
      </div>
    </div>
  );
}
export default CheckoutClient;
