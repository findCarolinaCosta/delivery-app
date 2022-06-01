import React, { useContext } from 'react';
import { MainContext } from '../context/MainProvider';

function Login() {
  const { teste } = useContext(MainContext);

  return (
    <main>
      <h1>{teste}</h1>
      <p>wololo</p>
    </main>
  );
}

export default Login;
