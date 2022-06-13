import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderProvider';

import { UserContext } from '../context/UserProvider';
import '../styles/Header.css';

function Header() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { isSellerPage } = useContext(OrderContext);

  const renderLinks = () => {
    if (user.role === 'administrator') {
      return (
        <nav>
          <NavLink
            to="/admin/manage"
            className="nav-link"
            data-testid="customer_products__element-navbar-link-orders"
          >
            GERENCIAR USUÁRIOS
          </NavLink>
        </nav>
      );
    }

    return (
      <nav>
        <NavLink
          to="/customer/products"
          className="nav-link"
          data-testid={ isSellerPage
            ? 'customer_products__element-navbar-link-orders'
            : 'customer_products__element-navbar-link-products' }
        >
          {isSellerPage === false ? 'PRODUTOS' : 'PEDIDOS'}
        </NavLink>
        {isSellerPage === false
        && (
          <NavLink
            to="/customer/orders"
            className="nav-link"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </NavLink>
        )}
      </nav>
    );
  };

  return (
    <header>
      {renderLinks()}
      <div>
        <h4 data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </h4>
        <button
          type="button"
          className="logout-button"
          onClick={ () => {
            navigate('/login');
            localStorage.removeItem('user');
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
