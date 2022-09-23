const commentModel = require('../model/comment.model');
const { success, failed } = require('../helper/response');

const commentController = {
  insertComment: (req, res) => {
    const {
      id_comment, id_user, id_recipe, description,
    } = req.body;
    commentModel
      .insertComment(id_comment, id_user, id_recipe, description)
      .then((result) => {
        res.json({
          message: 'success insert data',
          data: result,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  },
  listComment: (req, res) => {
    commentModel
      .listComment()
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  deleteComment: (req, res) => {
    const { id_comment } = req.params;
    commentModel
      .deleteComment(id_comment)
      .then((result) => {
        res.json({
          message: 'success delete data',
          data: result.rows,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
module.exports = commentController;
