import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { ProductsContext } from '../context/ProductsProvider';
import '../styles/ProductCard.css';

function ProductCard({ id, name, price, urlImage }) {
  // const localCart = JSON.parse(localStorage.getItem('cart'));
  const { cart, setCart } = useContext(ProductsContext);
  const localItem = cart.items.find((item) => item.name === name);
  const [quantity, setQuantity] = useState(localItem ? localItem.quantity : 0);

  const addItem = () => {
    const MINUS_ONE = -1;
    const updatedCart = { ...cart };
    const index = updatedCart.items.findIndex((item) => item.name === name);

    if (index !== MINUS_ONE) {
      console.log('1', quantity);
      updatedCart.items[index].quantity = quantity + 1;
    } else {
      updatedCart.items.push({ id, name, price, quantity: quantity + 1 });
    }

    const total = updatedCart.items.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0,
    );

    console.log('2', quantity);
    console.log(updatedCart);

    updatedCart.totalPrice = total;
    setCart(updatedCart);
    setQuantity(quantity + 1);
  };

  const handleChange = (e) => setQuantity(e.target.value);

  const removeItem = () => {
    const MINUS_ONE = -1;
    const updatedCart = { ...cart };
    const index = updatedCart.items.findIndex((item) => item.name === name);

    if (index !== MINUS_ONE) {
      if (quantity > 1) updatedCart.items[index].quantity = quantity - 1;
      else updatedCart.items.splice(index, 1);
    }

    const total = updatedCart.items.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0,
    );

    updatedCart.totalPrice = total;
    setCart(updatedCart);

    setQuantity(quantity === 0 ? 0 : quantity - 1);
  };

  return (
    <li className="product-card">
      <span className="product-price">
        R$
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          {price.replace('.', ',')}
        </span>
      </span>
      <div className="product-image-container">
        <img
          src={ urlImage }
          alt=""
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div className="product-name-container">
        <span data-testid={ `customer_products__element-card-title-${id}` }>
          {name}
        </span>
        <div className="product-control">
          <button
            type="button"
            onClick={ removeItem }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>
          <input
            type="number"
            value={ quantity }
            // min={ 0 }
            onChange={ handleChange }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <button
            type="button"
            onClick={ addItem }
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isRequired;

export default ProductCard;
