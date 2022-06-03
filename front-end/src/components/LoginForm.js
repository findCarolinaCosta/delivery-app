import React, { useEffect, useState } from 'react';
import statusCodes from '../utils/statusCodes';
import submitLogin from '../services/axios';
import isValidInputs from '../utils/inputValidation';
import inputHelper from '../utils/inputHelper';
import Inputs from './Inputs';
import '../styles/Login.css';

function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [status, setStatus] = useState();

  const handleLogin = ({ target }) => {
    setUserEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setUserPassword(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(await submitLogin(userEmail, userPassword));
  };

  useEffect(() => {
    if (typeof status === 'object') {
      return navigate.push('/customer/products');
    }
  }, [status]);

  return (
    <main className="login-page">
      <img alt="imagem-logo" />
      <form>
        <Inputs
          data={ inputHelper.Login }
          value={ userEmail }
          handler={ handleLogin }
        />
        <Inputs
          data={ inputHelper.Password }
          value={ userPassword }
          handler={ handlePassword }
        />
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ isValidInputs(userEmail, userPassword) }
          onClick={ (event) => handleSubmit(event) }
        >
          LOGIN
        </button>
        <button
          type="submit"
          data-testid="common_login__button-register"
        >
          Cadastre-se
        </button>
        { status === statusCodes.NOT_FOUND
          && (
            <span
              data-testid="common_login__element-invalid-email"
            >
              Usuário não encontrado
            </span>
          ) }
      </form>
    </main >
  );
}

export default LoginForm;
