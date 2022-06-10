const { Sale, SalesProduct } = require('../database/models');

const create = async (body) => {
  const { 
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    sellerId,
    userId,
    products,
  } = body;

  const newSale = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
  });

  const { id: saleId } = newSale;
  
  await Promise.all(products.map(async ({ id: productId, quantity }) => {
    await SalesProduct.create({ productId, saleId, quantity });
  }));

  return saleId;
};

module.exports = { create };
