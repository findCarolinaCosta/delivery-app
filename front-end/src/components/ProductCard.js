import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ProductsContext } from '../context/ProductsProvider';
import '../styles/ProductCard.css';

function ProductCard({ id, name, price, urlImage }) {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const localItem = localCart?.items.find((item) => item.name === name);
  const { setTotalPrice } = useContext(ProductsContext);
  const [quantity, setQuantity] = useState(localItem ? localItem.quantity : 0);

  const addItem = () => setQuantity(quantity + 1);

  const handleChange = (e) => setQuantity(e.target.value);

  const removeItem = () => setQuantity((prevState) => {
    if (prevState > 0) return prevState - 1;
    return 0;
  });

  useEffect(() => {
    console.log(price.replace('.', ','));
    // Update cart in local storage
    const MINUS_ONE = -1;
    const updatedCart = JSON.parse(localStorage.getItem('cart')) || {
      items: [],
      totalPrice: 0,
    };
    const index = updatedCart.items.findIndex((item) => item.name === name);

    if (index !== MINUS_ONE) {
      if (quantity !== 0) updatedCart.items[index].quantity = quantity;
      else updatedCart.items.splice(index, 1);
    } else if (quantity !== 0) {
      updatedCart.items.push({ name, price, quantity });
    }

    const total = updatedCart.items.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0,
    );

    updatedCart.totalPrice = total;
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setTotalPrice(total);
  }, [name, price, quantity, setTotalPrice]);

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
