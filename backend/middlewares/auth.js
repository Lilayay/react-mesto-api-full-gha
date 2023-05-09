const jwt = require('jsonwebtoken');
const AuthorizedError = require('../errors/UnautorizedError');
const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthorizedError('Необходимо авторизироваться'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return next(new AuthorizedError('Необходимо авторизироваться'));
  }
  req.user = payload;
  return next();
};
