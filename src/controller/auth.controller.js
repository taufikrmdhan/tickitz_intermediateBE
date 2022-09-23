const bcrypt = require('bcrypt');
const userModel = require('../model/user.model');
const { success, failed, successWithToken } = require('../helper/response');

const jwtToken = require('../helper/generateJWT');

module.exports = {
  register: (req, res) => {
    try {
      const {
        nama, email, password, phone, level,
      } = req.body;
      const image = req.file.filename;
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          failed(res, err.message, 'failed', 'fail hash password');
        }
        const data = {
          nama,
          email,
          password: hash,
          phone,
          level,
          image,
        };
        userModel
          .register(data)
          .then((result) => {
            success(res, result, 'success', 'Success register');
          })
          .catch((err) => {
            failed(res, err.message, 'failed', 'Failed register');
          });
      });
    } catch (err) {
      failed(res, err.message, 'failed', 'internal server error');
    }
  },
  login: async (req, res) => {
    const { nama, password } = req.body;
    userModel
      .checkUsername(nama)
      .then((result) => {
        const user = result.rows[0];
        if (result.rowCount > 0) {
          bcrypt.compare(password, result.rows[0].password).then(async (result) => {
            if (result) {
              const token = await jwtToken({
                nama: user.nama,
                level: user.level,
              });
              // process.env.ACCESS_TOKEN_SECRET,{
              //     expiresIn: '10m'
              // });
              // const refreshToken = await jwtToken({
              //     nama: user.nama,
              // },process.env.REFRESH_TOKEN_SECRET,{
              //     expiresIn: '1d'
              // });
              // res.cookie('jwt', refreshToken, {

              // });
              successWithToken(res, token, 'success', 'Success login');
            } else {
              failed(res, null, 'failed', 'Username or password wrong');
            }
          });
        } else {
          failed(res, null, 'failed', 'Username or password wrong');
        }
      }).catch((err) => {
        failed(res, err.message, 'failed', 'Internal server error');
      });
  },
};
