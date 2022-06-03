import { verifyToken } from '../utils';

function authMiddleware(req, _res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new Error('Token not found');
  }
  req.session = verifyToken(authorization);
  next();
}

export default authMiddleware;
