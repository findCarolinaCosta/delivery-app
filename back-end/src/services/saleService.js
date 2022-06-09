const { Sale, SalesProduct } = require('../database/models');

const create = async (body) => {
  console.log('body', body);
  const { 
    totalPrice,
    deliveryAddress, // sale
    deliveryNumber, //sale
    sellerId, //sale
    userId, // sale
  } = body;

  const newSale = await Sale.create({
    userId: 1,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
  });

  console.log('newSale', newSale)

  // const { id: saleId } = newSale;
  
  // const newSale = await SalePro.create({ saleId, productId, quantity})

  // return newSale
};

module.exports = { create };
