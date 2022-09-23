const fs = require('fs');
const path = require('path');
const { listUserById } = require('../model/user.model');
const { listRecipeById } = require('../model/recipe.model');

const remove = async (req, res, next) => {
  try {
    const { id_user } = req.params;
    const { rows: [user] } = await listUserById(id_user);
    const { image } = user;
    fs.unlink(`./public/${image}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    });
  } catch (err) {
    res.json(err);
  }
};
const removeRecipe = async (req, res, next) => {
  try {
    const { id_recipe } = req.params;
    const { rows: [recipe] } = await listRecipeById(id_recipe);
    const { image } = recipe;
    fs.unlink(`./public/${image}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = { remove, removeRecipe };
