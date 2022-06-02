const { Op } = require('sequelize');
const md5 = require('md5');
const { User } = require('../database/models');

const verifyUser = async (name, email) => {
  const user = await User.findOne({
    where: { [Op.or]: [{ name }, { email }] },
  });

  if (user) {
    throw new Error('Usuário já cadastrado');
  }
};

const create = async (name, email, password) => {
  const hash = md5(password);
  await verifyUser(name, email);
  const result = User.create({ name, email, password: hash, role: 'customer' });
  return result;
};

module.exports = { create };
