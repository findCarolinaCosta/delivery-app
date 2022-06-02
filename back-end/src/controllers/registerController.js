const service = require('../services/registerService');

const create = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const result = await service.create(name, email, password);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
