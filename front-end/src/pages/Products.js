import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsProvider';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

function CustomerProducts() {
  const { products, totalPrice } = useContext(ProductsContext);
  const navigate = useNavigate();

  const renderCards = () => products.map((product) => {
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
    <main>
      <Header />
      <ul className="product-card-list">{renderCards()}</ul>
      <button
        type="button"
        className="checkout-button"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ totalPrice === 0 }
        data-testid="customer_products__button-cart"
      >
        Ver carrinho: R$
        <span data-testid="customer_products__checkout-bottom-value">
          {totalPrice.toFixed(2).replace('.', ',')}
        </span>
      </button>
    </main>
  );
}

export default CustomerProducts;
