import React, { useContext } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { ProductsContext } from '../context/ProductsProvider';

function CheckoutClient() {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const { products, totalPrice } = useContext(ProductsContext);

  const renderCards = () => localCart.items.map((product) => {
    const { id, name, price, urlImage } = product;
    return (
      <ProductCard
        key={ id }
        id={ id }
        name={ name }
        price={ price }
        urlImage={ urlImage }
      />
    );
  });

  return (
    <div>
      <Header />
      <div>
        <h1> Finalizar Pedidos</h1>
        <ul className="product-card-list">{renderCards()}</ul>
        <h1> Detalhes do Pedido e Endereço para Entrega </h1>
        {/* <AddressClient /> */}
      </div>
    </div>
  );
}
export default CheckoutClient;
