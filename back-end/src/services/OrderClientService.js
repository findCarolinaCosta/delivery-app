const { Sale } = require('../database/models');

const getAll = () => Sale.findAll();

const getByClientId = (userId) => Sale.findOne({ where: { userId } });

module.exports = {
  getAll,
  getByClientId,
};
