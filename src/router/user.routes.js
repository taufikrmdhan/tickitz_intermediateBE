const express = require('express');
const {
  insert, list, update, destroy, listUserById,
} = require('../controller/user.controller');
const { register, login } = require('../controller/auth.controller');

const jwtAuth = require('../middleware/jwtAuth');
const { isAdmin, isUser } = require('../middleware/authorization');
const deleted = require('../middleware/delete');
const upload = require('../middleware/upload');

const router = express.Router();

router
  .get('/user/list', jwtAuth, isAdmin, list)
  .get('/user/list/:id_user', listUserById)
  .post('/user/add', insert)
  .put('/user/update/:id_user', deleted.remove, upload, update)
  // .delete('/user/delete/:id_user', destroy)
  .delete('/user/delete/:id_user', deleted.remove, destroy)

  .post('/user/register', register)
  .post('/user/login', login);

module.exports = router;
