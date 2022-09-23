const express = require('express');
const { insertComment, listComment, deleteComment } = require('../controller/comment.controller');

const router = express.Router();

router
  .post('/comment/add', insertComment)
  .get('/comment/list', listComment)
  .delete('/comment/delete/:id_comment', deleteComment);

module.exports = router;
