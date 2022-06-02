const { Sale } = require('../database/models');

const getAll = () => Sale.findAll();

// lint chorando camel case
const getByClientId = (user_id) => Sale.findOne({ where: { user_id } });

module.exports = {
  getAll,
  getByClientId,
};
