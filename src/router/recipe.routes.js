const express = require('express');
const {
  insertRecipe, listRecipe, listRecipeById, listRecipeAsc, updateRecipe, deleteRecipe, updateRecipeById, listRecipeByName
} = require('../controller/recipe.controller');

const upload = require('../middleware/upload');
const deleted = require('../middleware/delete');
const jwtAuth = require('../middleware/jwtAuth');
const { isAdmin } = require('../middleware/authorization');

const router = express.Router();

router
  .get('/recipe/list/:title', listRecipeByName)
  // .get('/recipe/list/:id_recipe', listRecipeById)
  .get('/recipe/list', listRecipe)
  .post('/recipe/list/desc', listRecipeAsc)
  .post('/recipe/add', upload, insertRecipe)
  .put('/recipe/update/:id_recipe', deleted.removeRecipe, upload, updateRecipe)
  // .put('/recipe/update/:title', updateRecipeByName)
  // .put('/recipe/update/:id_recipe', deleted.removeRecipe, upload, updateRecipeById)
  // .delete('/recipe/delete/:id_recipe', deleteRecipe)
  .delete('/recipe/delete/:id_recipe',jwtAuth, deleted.removeRecipe, deleteRecipe);

module.exports = router;
