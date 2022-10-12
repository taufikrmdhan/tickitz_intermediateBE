const userModel = require('../model/user.model');
const { success, failed } = require('../helper/response');
const bcrypt = require('bcrypt');

const userController = {
  insert: (req, res) => {
    const {
      nama, email, password, phone,
    } = req.body;
    userModel
      .insert(nama, email, password, phone)
      .then((result) => {
        success(res, null, 'success', 'success insert data');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed insert data');
      });
  },
  list: (req, res) => {
    const limit = parseInt(req.query.limit) || 3;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    userModel
      .list(limit, offset)
      .then((result) => {
        success(res, result, 'success', 'success get data');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed get data');
      });
  },
  listUserById: (req, res) => {
    const { id_user } = req.params;
    userModel
      .listUserById(id_user)
      .then((result) => {
        success(res, result, 'success', 'success get data by Id');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed get data by Id');
      });
  },
  update: (req, res) => {
    // const { password } = req.body;
    const { id_user } = req.params;
    const image = req.file.filename;
    userModel
      .update(id_user, image)
      .then((result) => {
        if (result.rowCount == 1) {
          success(res, result, 'success', 'success update data');
        } else {
          failed(res, err, 'failed', 'failed update data');
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  updateByEmail: (req, res) => {
    // const { password } = req.body;{
      try {
        const { email } = req.params;
        const { password } = req.body; 
        bcrypt.hash(password, 10, (err, hash) => {
          console.log(hash);
          if (err) {
            failed(res, err.message, 'failed', 'fail hash password');
          }
          const data = {
            email,
            password: hash,
          };
          userModel
            .updateByEmail(data)
            .then((result) => {
              success(res, result, 'success', 'Success update');
            })
            .catch((err) => {
              failed(res, err.message, 'failed', 'Failed update');
            });
        });
      } catch (err) {
        failed(res, err.message, 'failed', 'internal server error');
      }
    },
  destroy: (req, res) => {
    const { id_user } = req.params;
    userModel
      .destroy(id_user)
      .then((result) => {
        success(res, result, 'success', 'success delete data');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed delete data');
      });
  },
};
module.exports = userController;
