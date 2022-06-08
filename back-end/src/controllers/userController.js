const service = require('../services/userService');

const verifyAdm = (session) => {
  if (session.role !== 'administrator') throw new Error('Não autorizado.');
};

const create = async (req, res, next) => {
  try {
    verifyAdm(req.session);
    const { name, email, password, role = 'customer' } = req.body;
    const result = await service.create(name, email, password, role);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    verifyAdm(req.session);
    const result = await service.getAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    verifyAdm(req.session);
    const { id } = req.params;
    await service.destroy(id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll, destroy };
