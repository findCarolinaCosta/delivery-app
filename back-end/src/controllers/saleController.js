const service = require('../services/saleService');

const create = async (req, res, next) => {
  try {
    const { body } = req;
    const result = await service.create(body);

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { 
  create,
};
