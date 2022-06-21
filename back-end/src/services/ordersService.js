const { Sale } = require('../database/models');
const serializeData = require('./helpers/serializeData');

const getAll = () => Sale.findAll();

const getByClientId = async (userId) => {
  const orders = await Sale.findAll({ where: { userId } });
  const ordersString = JSON.stringify(orders);
  return Promise.all(
    JSON.parse(ordersString).map((order) => serializeData(order)),
  );
};

const getBySellerId = async (sellerId) => {
  const orders = await Sale.findAll({ where: { sellerId } });
  const ordersString = JSON.stringify(orders);
  return Promise.all(
    JSON.parse(ordersString).map((order) => serializeData(order)),
  );
};

module.exports = {
  getAll,
  getByClientId,
  getBySellerId,
};
