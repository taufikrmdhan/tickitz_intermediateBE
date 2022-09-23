const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../helper/env');
const { failed } = require('../helper/response');

module.exports = (req, res, next) => {
  try {
    const { token } = req.headers;
    const decode = jwt.verify(token, JWT_SECRET);

    req.APP_DATA = {
      tokenDecode: decode,
    };
    next();
  } catch (error) {
    failed(res, error, 'failed', 'Invalid token');
  }
};
