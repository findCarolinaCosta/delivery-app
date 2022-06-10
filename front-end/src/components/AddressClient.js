import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { genericApiResquest, createSale } from '../api';
import { ProductsContext } from '../context/ProductsProvider'

export default function AddressClient() {
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [sellers, setSellers] = useState([]);
  const { cart } = useContext(ProductsContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    const newSale = {
      userId: user.id,
      sellerId,
      deliveryAddress: address,
      deliveryNumber: number,
      status: 'Pendente',
      products: cart.items,
      totalPrice: cart.totalPrice,
    };
    const { token } = user;

    console.log('newSale', newSale);

    const { data: saleId } = await createSale.post('/customer/checkout',
 /*      { headers: {
        authorization: token,
      } }, */
      newSale);

    navigate(`/customer/orders/${saleId}`);
  }

  useEffect(() => {
    genericApiResquest.get('/sellers').then((response) => {
      setSellers(response.data);
      setSellerId(response.data[0].id);
    });
  }, []);

  return (
    <div className="adressClient">
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <div className="AdressInline">
          <label htmlFor="responsavel">
            P. Vendedora Responsável
            <select
              data-testid="customer_checkout__select-seller"
              onChange={ ({ target }) => setSellerId(target.value) }
            >
              { sellers.map(({ id, name }, index) => (
                <option
                  key={ index }
                  value={ id }
                >
                  {name}
                </option>
              )) }
            </select>
          </label>
          <label htmlFor="AddressClient">
            Endereço:
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              id="Address"
              onChange={ (e) => setAddress(e.target.value) }
            />
          </label>
          <label htmlFor="numberAddress">
            Número:
            <input
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              id="number"
              onChange={ (e) => setNumber(e.target.value) }
            />
          </label>
        </div>
        <div className="ButtonFinishOrder">
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
            onClick={ (e) => handleSubmit(e) }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </form>
    </div>
  );
}
