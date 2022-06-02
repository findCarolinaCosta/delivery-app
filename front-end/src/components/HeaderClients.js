import React, { useContext } from 'react';
import { MainContext } from '../context/MainProvider';
import '../styles/headerclient.css';

function HeaderClients() {
  const { clientName } = useContext(MainContext);
  return (
    <header>
      <nav>
        <section className="flex">
          <div className="primary">
            <h1
              data-testid="customer_products__element-navbar-link-products"
            >
              PRODUTOS
            </h1>
          </div>
          <div className="secondary">
            <h1
              data-testid="customer_products__element-navbar-link-orders"
            >
              MEUS PEDIDOS
            </h1>
          </div>
        </section>
        <section className="flex">
          <div className="tertiary">
            <h1
              data-testid="customer_products__element-navbar-user-full-name"
            >
              {clientName}

            </h1>
          </div>
          <div className="quaternary">
            <button
              type="reset"
              data-testid="customer_products__element-navbar-link-logout"
            >
              Sair
            </button>
          </div>
        </section>
      </nav>
    </header>
  );
}

export default HeaderClients;
