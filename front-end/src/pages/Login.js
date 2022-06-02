import React, { useContext } from 'react';
import { MainContext } from '../context/MainProvider';

function Login() {
  return (
    <form>
      <label htmlFor="email">
        Login
        <input
          placeholder="email"
          data-testid="common_login__input-email"
          name="email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          placeholder="password"
          data-testid="common_login__input-password"
          name="password"
        />
      </label>
      <button type="button" data-testid="common_login__button-login">Login</button>
      <Link
        to="/register"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </Link>
    </form>
  );
}

export default Login;
