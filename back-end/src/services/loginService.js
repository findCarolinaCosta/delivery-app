const md5 = require('md5');
const { User } = require('../database/models');
const { createToken } = require('../utils');

const login = async (email, password) => {
  const result = await User.findOne({ where: { email } });
  if (!result) {
    throw new Error('Usuário não encontrado');
  }
  console.log(result.password, md5(password));
  if (result.password !== md5(password)) {    
    throw new Error('Senha inválida');
  }

  const { id, name, role } = result;
  const jwtData = { name, email, role };
  const token = createToken(jwtData);

  return { id, name, email, role, token };
};

module.exports = { login };
