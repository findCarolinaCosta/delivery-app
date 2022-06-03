const statusCodes = {
  'Usuário não encontrado': 404,
  'Senha inválida': 400,
  'Usuário já cadastrado': 409,
  'Token not found': 404,
};

function errorMiddleware(err, _req, res, _next) {
  console.log(err);
  const statusCode = statusCodes[err.message];
  if (statusCode) {
    return res.status(statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal error' });
}

module.exports = errorMiddleware;
