const { Sale, SalesProduct } = require('../database/models');

const create = async ({
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  sellerId,
  userId,
  products,
}) => {
  const { id: saleId } = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
  });
  await Promise.all(products.map(({ id: pId, qtd }) => SalesProduct.create({ pId, saleId, qtd })));
  return saleId;
};

module.exports = { create };
