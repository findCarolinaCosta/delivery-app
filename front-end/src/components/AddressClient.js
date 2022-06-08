import React, { useState } from 'react';


export default function AddressClient() {
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  function handleSubimit(e) {
    e.preventDefault();
    let newSale = {
      address,
      number,
    }
  }

  return (
    <div className="adressClient">
      <h1>Detalhes e Endereço para Entrega</h1>
      <form onSubmit={ handleSubimit }>
        <div className="AdressInline">
          <label htmlFor="responsavel">
            P. Vendedora Responsável
            <select data-testid="customer_checkout__select-seller">
              {/* <option value="teste-fulana">Fulana Pereira</option> */}
            </select>
          </label>
          <label htmlFor="AddressClient">
            Endereço:
            <input
              data-testid="customer_checkout__input-adress"
              type="text"
              id="Address"
              onChange={ (e) => setAddress(e.target.value) }
            />
          </label>
          <label htmlFor="numberAddress">
            Número:
            <input
              data-testid="customer_checkout__input-adressNumber"
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
            // onClick={ FinalizarPedido }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </form>
    </div>
  );
}
