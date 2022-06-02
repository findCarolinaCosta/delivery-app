const statusCodes = {
  'Usuário já cadastrado': 409,
};

function errorMiddleware(err, _req, res, _next) {
  const statusCode = statusCodes[err.message];
  if (statusCode) {
    return res.status(statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal error' });
}

module.exports = errorMiddleware;
