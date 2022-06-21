const ordersService = require('../services/ordersService');

const getByClientId = async (req, res) => {
  const { userId } = req.params;
 try {
   const orders = await ordersService.getByClientId(userId);
   return res.status(200).json(orders);
 } catch (error) {
   console.log(error);
   return res.status(500).json({ message: 'Internal error server' });
 }
};

const getBySellerId = async (req, res) => {
  const { sellerId } = req.params;
 try {
   const orders = await ordersService.getBySellerId(sellerId);
   return res.status(200).json(orders);
 } catch (error) {
   console.log(error);
   return res.status(500).json({ message: 'Internal error server' });
 }
};

module.exports = {
  getByClientId,
  getBySellerId,
};
