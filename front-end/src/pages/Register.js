import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { login, registerUser } from '../api';
import statusCodes from '../utils/statusCodes';
import '../styles/Register.css';

function Register() {
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState({ name: '', email: '', password: '' });
  const [inputValidation, setInputValidation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const checkValidation = useCallback(() => {
    const { name, email, password } = input;
    const re = /\S+@\S+\.\S+/;
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORD_LENGTH = 6;

    if (
      re.test(email)
      && name.length >= MIN_NAME_LENGTH
      && password.length >= MIN_PASSWORD_LENGTH
    ) {
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
    const { name, email, password } = input;
    const registerResult = await registerUser(name, email, password);

    if (registerResult.status === statusCodes.CREATED) {
      const loginResult = await login(email, password);
      setUser(loginResult.data);
      localStorage.setItem('user', JSON.stringify(loginResult.data));
      navigate('/customer/products');
    } else {
      setMessage(registerResult.data.message);
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
      <h1>Cadastro</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name-input">
          <span>Nome:</span>
          <br />
          <input
            type="text"
            id="name-input"
            name="name"
            onChange={ handleChange }
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="email-input">
          <span>E-mail:</span>
          <br />
          <input
            type="text"
            id="email-input"
            name="email"
            onChange={ handleChange }
            data-testid="common_register__input-email"
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
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="submit"
          disabled={ !inputValidation }
          data-testid="common_register__button-register"
        >
          {isLoading ? <div className="loader" /> : <span>Cadastrar</span>}
        </button>
      </form>
      {message && (
        <p data-testid="common_register__element-invalid_register">{message}</p>
      )}
    </main>
  );
}

export default Register;
