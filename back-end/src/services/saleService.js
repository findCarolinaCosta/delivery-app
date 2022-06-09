const { Sale, SalesProduct } = require('../database/models');

const create = async (body) => {
  const { 
    deliveryAddress, // sale
    deliveryNumber, //sale
    sellerId, //sale
    userId, // sale
  } = body;

  const newSale = await Sale.create({
    userId,
    sellerId,
    totalPrice: 100,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
  });

  console.log(newSale)

  // const { id: saleId } = newSale;
  
  // const newSale = await SalePro.create({ saleId, productId, quantity})

  // return newSale
};

module.exports = { create };
