const { SalesProduct, Product, Sale } = require('../database/models');
const serializeData = require('./helpers/serializeData');

const getByClientId = async (userId) => {
  const orders = await Sale.findAll({ where: { userId } });
  const ordersString = JSON.stringify(orders);
  return Promise.all(
    JSON.parse(ordersString).map((order) => serializeData(order)),
  );
};

const getBySaleId = async (saleId) => SalesProduct.findAll({
    where: { saleId },
    include: [
      { 
        model: Sale, 
        as: 'sale',
        attributes: { include: ['seller_id', 'total_price', 'sale_date', 'status'] }, 
      },
      { model: Product, as: 'product', attributes: { attributes: ['name', 'price'] } },
    ],
  });

module.exports = {
  getByClientId,
  getBySaleId,
};
