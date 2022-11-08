const recipeModel = require("../model/recipe.model");
const cloudinary = require("../helper/cloudinary");
const { success, failed } = require("../helper/response");

const recipeController = {
  // async await insertRecipe
  insertRecipe: async (req, res) => {
    try {
      const { title, ingredient, videostep } = req.body;
      const image = await cloudinary.uploader.upload(req.file.path);
      console.log(image);
      const data = {
        title,
        image,
        ingredient,
        videostep,
        image_url: image.url,
        image_public_id: image.public_id,
        image_secure_url: image.secure_url,
      };
      console.log(data);
      recipeModel
        .insertRecipe(data)
        .then((result) => {
          res.json({
            message: "success insert data",
            data: result,
          });
        })
        .catch((err) => {
          res.json(err);
        });
      // const result = await recipeModel.insertRecipe(data);
      // success(res, result, 'success', 'Success insert recipe');
    } catch (err) {
      failed(res, err.message, "failed", "Failed insert recipe");
    }
  },
  // insertRecipe: (req, res) => {
  //   const {
  //     title, ingredient, videostep
  //   } = req.body;
  //   const image = req.file.filename;
  //   recipeModel
  //     .insertRecipe(title, image, ingredient, videostep)
  //     .then((result) => {
  //       res.json({
  //         message: 'success insert data',
  //         data: result,
  //       });
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // },
  listRecipe: (req, res) => {
    recipeModel
      .listRecipe()
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  listRecipeByName: (req, res) => {
    const { title } = req.params;
    recipeModel
      .listRecipeByName(title)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  listRecipeById: (req, res) => {
    const { id_recipe } = req.params;
    recipeModel
      .listRecipeById(id_recipe)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  listRecipeAsc: (req, res) => {
    const limit = parseInt(req.query.limit) || 6;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    recipeModel
      .listRecipeAsc(limit, offset)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  // async await updateRecipe
  updateRecipe: async (req, res) => {
    try {
      const { id_recipe } = req.params;
      const { title, ingredient, videostep } = req.body;
      const image = await cloudinary.uploader.upload(req.file.path);
      console.log(image);
      const data = {
        id_recipe,
        title,
        image,
        ingredient,
        videostep,
        image_url: image.url,
        image_public_id: image.public_id,
        image_secure_url: image.secure_url,
      };
      recipeModel
        .updateRecipe(data)
        .then((result) => {
          success(res, result, "success", "Success update recipe");
        })
        .catch((err) => {
          failed(res, err.message, "failed", "Failed update recipe");
        });
      // const result = await recipeModel.updateRecipe(id_recipe, data);
      // success(res, result, 'success', 'Success update recipe');
    } catch (err) {
      failed(res, err.message, "failed", "Failed update recipe");
    }
  },
  // updateRecipe: (req, res) => {
  //   const { id_recipe } = req.params;
  //   const { title, ingredient, videostep } = req.body;
  //   const image = req.file.filename;
  //   recipeModel
  //     .updateRecipe(id_recipe, title, image, ingredient, videostep)
  //     .then((result) => {
  //       if (result.rowCount == 1) {
  //         res.json({
  //           message: "success update data",
  //           data: result,
  //         });
  //       } else {
  //         res.json({
  //           message: "failed update data",
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // },
  // updateRecipeByName: (req, res) => {
  //   const { title } = req.params;
  //   const { image, ingredient, videostep } = req.body;
  //   recipeModel
  //     .updateRecipeByName(title, image, ingredient, videostep)
  //     .then((result) => {
  //       if (result.rowCount == 1) {
  //         res.json({
  //           message: 'success update data',
  //           data: result,
  //         });
  //       } else {
  //         res.json({
  //           message: 'failed update data',
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // },
  updateRecipeById: (req, res) => {
    const { id_recipe } = req.params;
    const image = req.file.filename;
    recipeModel
      .updateRecipeById(id_recipe, image)
      .then((result) => {
        if (result.rowCount == 1) {
          res.json({
            message: "success update data",
            data: result,
          });
        } else {
          res.json({
            message: "failed update data",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  // async await deleteRecipe using cloudinary
  deleteRecipe: async (req, res) => {
    try {
      const { id_recipe } = req.params;
      recipeModel
        .deleteRecipe(id_recipe)
        .then((result) => {
          res.json({
            message: "success delete data",
            data: result,
          });
        })
        .catch((err) => {
          res.json(err);
        })
    } catch (err) {
      failed(res, err.message, "failed", "Failed delete recipe");
    }
  }
  // deleteRecipe: (req, res) => {
  //   const { id_recipe } = req.params;
  //   recipeModel
  //     .deleteRecipe(id_recipe)
  //     .then((result) => {
  //       res.json({
  //         message: "success delete data",
  //         data: result,
  //       });
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // },
};
module.exports = recipeController;
