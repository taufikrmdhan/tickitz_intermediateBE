const { failed } = require('../helper/response');

module.exports = {
  isAdmin: (req, res, next) => {
    if (req.APP_DATA.tokenDecode.level == 0) {
      next();
    } else {
      failed(res, null, 'failed', 'User dont have access');
    }
  },
  isUser: (req, res, next) => {
    if (req.APP_DATA.tokenDecode.level == 1) {
      next();
    } else {
      failed(res, null, 'failed', 'Admin dont have access');
    }
  },
};
