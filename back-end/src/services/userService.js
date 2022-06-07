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

const create = async (name, email, password, role) => {
  await verifyUser(name, email);
  const hash = md5(password);
  const result = await User.create({ name, email, password: hash, role });
  return result;
};

const getAll = async () => User.findAll();

const destroy = async (id) => User.destroy({ where: { id } });

module.exports = { create, destroy, getAll };
