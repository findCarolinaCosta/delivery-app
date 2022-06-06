import React from 'react';

export default function AddressClient() {
  return (
    <div className="adressClient">
      {' '}
      {/*       // essa linha mostra 3 campos */}
      <form onSubmit={ handleSubimit }>
        <div className="AdressInline">
          <label htmlFor="responsavel">
            {' '}
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
            />
          </label>
          <label htmlFor="numberAddress">
            Endereço:
            <input
              data-testid="customer_checkout__input-adressNumber"
              type="text"
              id="number"
            />
          </label>
        </div>
        <div className="ButtonFinishOrder">
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            onClick={ FinalizarPedido }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </form>
    </div>
  );
}
