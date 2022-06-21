const ordersService = require('../services/ordersService');

const errorServer = 'Internal error server';

const getByClientId = async (req, res) => {
  const { userId } = req.params;
 try {
   const orders = await ordersService.getByClientId(userId);
   return res.status(200).json(orders);
 } catch (error) {
   console.log(error);
   return res.status(500).json({ message: errorServer });
 }
};

const getBySellerId = async (req, res) => {
  const { sellerId } = req.params;
 try {
   const orders = await ordersService.getBySellerId(sellerId);
   return res.status(200).json(orders);
 } catch (error) {
   console.log(error);
   return res.status(500).json({ message: errorServer });
 }
};

const getBySaleId = async (req, res) => {
  const { saleId } = req.params;
 try {
   const order = await ordersService.getBySaleId(saleId);
   return res.status(200).json(order);
 } catch (error) {
   console.log(error);
   return res.status(500).json({ message: errorServer });
 }
};

module.exports = {
  getByClientId,
  getBySaleId,
  getBySellerId,
};
