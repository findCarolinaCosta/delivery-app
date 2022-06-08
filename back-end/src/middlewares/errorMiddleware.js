const statusCodes = {
  'Senha inválida': 400,
  'Não autorizado': 401,
  'Token não encontrado': 404,
  'Usuário não encontrado': 404,
  'Usuário já cadastrado': 409,
};

function errorMiddleware(err, _req, res, _next) {
  console.log(err);
  const statusCode = statusCodes[err.message];
  if (statusCode) return res.status(statusCode).json({ message: err.message });
  return res.status(500).json({ message: 'Internal error' });
}

module.exports = errorMiddleware;
