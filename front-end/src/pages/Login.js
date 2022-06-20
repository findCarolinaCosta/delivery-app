import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import useValidation from '../hooks/useValidation';
import { login } from '../api';
import statusCodes from '../utils/statusCodes';
import InputGroup from '../components/InputGroup';
import '../styles/Common.css';

function Login() {
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const validation = useValidation(input);

  useEffect(() => {
    const user = localStorage.getItem('user');
    return user && navigate('/customer/products');
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { email, password } = input;
    const { status, data } = await login(email, password);

    if (status === statusCodes.OK) {
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      if (data.role === 'administrator') navigate('/admin/manage');
      else navigate('/customer/products');
    } else {
      setMessage(data.message);
    }

    setIsLoading(false);
  };

  const handleChange = ({ target: { name, value } }) => {
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <main className="common-page">
      <h1>Log In</h1>
      <form onSubmit={ handleSubmit }>
        <InputGroup
          label="E-mail:"
          name="email"
          onChange={ handleChange }
          dataTestid="common_login__input-email"
        />
        <InputGroup
          label="Senha:"
          type="password"
          name="password"
          onChange={ handleChange }
          dataTestid="common_login__input-password"
        />
        <button
          type="submit"
          disabled={ !validation }
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
