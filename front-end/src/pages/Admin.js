import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserProvider';
import useValidation from '../hooks/useValidation';
import { createUser, destroyUser, fetchUsers } from '../api';
import statusCodes from '../utils/statusCodes';
import Header from '../components/Header';
import InputGroup from '../components/InputGroup';
import '../styles/Common.css';

function Admin() {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const validation = useValidation(input);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { name, email, password, role } = input;
    const registerResult = await createUser(
      { name, email, password, role },
      user.token,
    );

    if (registerResult.status === statusCodes.CREATED) {
      setMessage('Usuário cadastrado com sucesso');
    } else {
      setMessage(registerResult.data.message);
    }

    setIsLoading(false);
  };

  const handleChange = ({ target: { name, value } }) => {
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await fetchUsers(user.token);
      setUsers(data);
    };
    getUsers();
  }, [user.token]);

  const renderForm = () => (
    <form onSubmit={ handleSubmit }>
      <InputGroup
        label="Nome:"
        name="name"
        onChange={ handleChange }
        dataTestid="admin_manage__input-name"
      />
      <InputGroup
        label="E-mail:"
        name="email"
        onChange={ handleChange }
        dataTestid="admin_manage__input-email"
      />
      <InputGroup
        label="Senha:"
        type="password"
        name="password"
        onChange={ handleChange }
        dataTestid="admin_manage__input-password"
      />
      <label htmlFor="role-input">
        <select
          id="role-input"
          name="role"
          onChange={ handleChange }
          data-testid="admin_manage__select-role"
        >
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
      <button
        type="submit"
        disabled={ !validation }
        data-testid="admin_manage__button-register"
      >
        {isLoading ? <div className="loader" /> : <span>Cadastrar</span>}
      </button>
    </form>
  );

  const renderUsers = () => users.map(({ id, name, email, role }) => (
    <li key={ id }>
      <span
        data-testid={ `admin_manage__element-user-table-item-number-${id}` }
      >
        {id}
      </span>
      <span data-testid={ `admin_manage__element-user-table-name-${id}` }>
        {name}
      </span>
      <span data-testid={ `admin_manage__element-user-table-email-${id}` }>
        {email}
      </span>
      <span data-testid={ `admin_manage__element-user-table-role-${id}` }>
        {role}
      </span>
      <button
        type="button"
        onClick={ async () => {
          await destroyUser(id, user.token);
          setUsers(users.filter((el) => el.id !== id));
        } }
        data-testid={ `admin_manage__element-user-table-remove-${id}` }
      >
        Excluir
      </button>
    </li>
  ));

  return (
    <main>
      <Header />
      <section className="common-page">
        {renderForm()}
        {message && (
          <p data-testid="admin_manage__element-invalid-register">{message}</p>
        )}
      </section>
      <ul>{renderUsers()}</ul>
    </main>
  );
}

export default Admin;
