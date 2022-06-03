const md5 = require('md5');
const { User } = require('../database/models');
const { createToken } = require('../utils');

const login = async (email, password) => {
  const response = await User.findOne({ where: { email } });
  if (!response) {
    throw new Error('Usuário não encontrado');
  }
  console.log(response.password, md5(password));
  if (response.password !== md5(password)) {    
    throw new Error('Senha inválida');
  }

  const jwtData = {
    email: response.email,
    role: response.role,
  }

  const token = createToken(jwtData)

  return token;
};

module.exports = { login };