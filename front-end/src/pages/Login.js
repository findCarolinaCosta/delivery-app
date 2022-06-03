import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { login } from '../api';
import statusCodes from '../utils/statusCodes';
import '../styles/Register.css';

function Login() {
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState({ email: '', password: '' });
  const [inputValidation, setInputValidation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const checkValidation = useCallback(() => {
    const { email, password } = input;
    const re = /\S+@\S+\.\S+/;
    const MIN_PASSWORD_LENGTH = 6;

    if (re.test(email) && password.length >= MIN_PASSWORD_LENGTH) {
      setInputValidation(true);
    } else {
      setInputValidation(false);
    }
  }, [input]);

  const handleChange = ({ target: { name, value } }) => {
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { email, password } = input;
    const loginResult = await login(email, password);

    if (loginResult.status === statusCodes.OK) {
      setUser(loginResult.data);
      localStorage.setItem('user', JSON.stringify(loginResult.data));
      navigate('/customer/products');
    } else {
      setMessage(loginResult.data.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    let control = true;
    if (control) checkValidation();

    return () => {
      control = false;
    };
  }, [checkValidation]);

  return (
    <main className="register-page">
      <h1>Log In</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email-input">
          <span>E-mail:</span>
          <br />
          <input
            type="text"
            id="email-input"
            name="email"
            onChange={ handleChange }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password-input">
          <span>Senha:</span>
          <br />
          <input
            type="password"
            id="password-input"
            name="password"
            onChange={ handleChange }
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="submit"
          disabled={ !inputValidation }
          data-testid="common_login__button-login"
        >
          {isLoading ? <div className="loader" /> : <span>Logar</span>}
        </button>
        <button
          type="button"
          onClick={ () => {
            navigate('/register');
          } }
          data-testid="common_login__button-register"
        >
          <span>Registrar</span>
        </button>
      </form>
      {message && (
        <p data-testid="common_login__element-invalid-email">{message}</p>
      )}
    </main>
  );
}

export default Login;
