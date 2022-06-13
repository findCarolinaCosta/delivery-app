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
  await Promise.all(products.map(({ id: productId, quantity }) => 
    SalesProduct.create({ productId, saleId, quantity })));
  return saleId;
};

module.exports = { create };
