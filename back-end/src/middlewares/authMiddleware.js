const { verifyToken } = require('../utils');

function authMiddleware(req, _res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw new Error('Token não encontrado');
  req.session = verifyToken(authorization);
  next();
}

module.exports = authMiddleware;
