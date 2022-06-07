import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserProvider';
import useValidation from '../hooks/useValidation';
import { login, registerUser } from '../api';
import statusCodes from '../utils/statusCodes';
import InputGroup from '../components/InputGroup';
import '../styles/Common.css';

function Register() {
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const validation = useValidation(input);

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

  const handleChange = ({ target: { name, value } }) => {
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <main className="common-page">
      <h1>Cadastro</h1>
      <form onSubmit={ handleSubmit }>
        <InputGroup
          label="Nome:"
          name="name"
          onChange={ handleChange }
          dataTestid="common_register__input-name"
        />
        <InputGroup
          label="E-mail:"
          name="email"
          onChange={ handleChange }
          dataTestid="common_register__input-email"
        />
        <InputGroup
          label="Senha:"
          type="password"
          name="password"
          onChange={ handleChange }
          dataTestid="common_register__input-password"
        />
        <button
          type="submit"
          disabled={ !validation }
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
