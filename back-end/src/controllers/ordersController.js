const OrderClientService = require('../services/ordersService');

const getByClientId = async (req, res) => {
  const { userId } = req.params;
 try {
   const orders = await OrderClientService.getByClientId(userId);
   return res.status(200).json(orders);
 } catch (error) {
   console.log(error);
   return res.status(500).json({ message: 'Internal error server' });
 }
};

module.exports = {
  getByClientId,
};
