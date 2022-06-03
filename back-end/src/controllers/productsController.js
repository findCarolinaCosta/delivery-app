const service = require('../services/productsService');

const getAll = async (req, res, next) => {
  try {
    const result = await service.getAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };
