import React, { useContext } from 'react';
import { MainContext } from '../context/MainProvider';
import '../styles/headerclient.css';

function HeaderClients() {
  const { clientName } = useContext(MainContext);
  return (
    <header>
      <nav>
        <div>
          <h1
            className="primary"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS

          </h1>
        </div>
        <div>
          <h1
            className="secondary"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS

          </h1>
        </div>
        <div>
          <h1
            className="tertiary"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {clientName}

          </h1>
        </div>
        <div>
          <button
            type="reset"
            className="quaternary"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderClients;
