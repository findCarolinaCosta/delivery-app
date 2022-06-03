import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <NavLink
          to="/customer/products"
          className="nav-link"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </NavLink>
        <NavLink
          to="/customer/orders"
          className="nav-link"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </NavLink>
      </nav>
      <div>
        <h4 data-testid="customer_products__element-navbar-user-full-name">
          Nome do Cliente
        </h4>
        <button
          type="button"
          className="logout-button"
          onClick={ () => {
            navigate('/login');
            localStorage.removeItem('cart');
          } }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </div>
    </header>
  );
}

export default Header;
