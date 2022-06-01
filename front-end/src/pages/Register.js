import React, { useCallback, useEffect, useState } from 'react';
import '../styles/Register.css';

function Register() {
  const [input, setInput] = useState({ name: '', email: '', password: '' });
  const [inputValidation, setInputValidation] = useState(false);

  const checkValidation = useCallback(() => {
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORD_LENGTH = 6;
    const re = /\S+@\S+\.\S+/;
    const { name, email, password } = input;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  useEffect(() => {
    checkValidation();
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
          Cadastrar
        </button>
      </form>
      <p data-testid="common_register__element-invalid_register">
        Mensagem de erro
      </p>
    </main>
  );
}

export default Register;
