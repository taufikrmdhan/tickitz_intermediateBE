const db = require('../config/db');

const recipeModel = {
  insertRecipe: ({title, image, ingredient, videostep, image_url, image_public_id, image_secure_url}) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO recipe (title, image, ingredient, videostep, image_url, image_public_id, image_secure_url, createdat) VALUES
       ('${title}', '${image}', '${ingredient}', '${videostep}','${image_url}','${image_public_id}','${image_secure_url}', now())`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  });
  },
  //   register: ({ username, phone, password, image }) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(`INSERT INTO users(username, phone, password, image)
  //     VALUES
  //     ('${username}', '${phone}', '${password}', '${image}')`, (err, res) => {
  //       if (err) {
  //         reject(err)
  //       }
  //       resolve(res)
  //     })
  //   })
  // },
  listRecipe: () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM recipe', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  listRecipeByName: (title) => new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM recipe WHERE lower(title) LIKE lower ('%${title}%')`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  listRecipeById: (id_recipe) => new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM recipe WHERE id_recipe = ${id_recipe}`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  listRecipeAsc: (limit, offset) => new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM recipe ORDER BY createdat DESC LIMIT ${limit} OFFSET ${offset}`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  updateRecipe: ({id_recipe, title, image, ingredient, videostep, image_public_id, image_url, image_secure_url}) => new Promise((resolve, reject) => {
    db.query(
      `UPDATE recipe SET title = '${title}', image = '${image}', ingredient = '${ingredient}', videostep = '${videostep}',image_public_id = '${image_public_id}',image_url = '${image_url}',image_secure_url = '${image_secure_url}' WHERE id_recipe = ${id_recipe}`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  // updateRecipeByName: (title, image, ingredient, videostep) => new Promise((resolve, reject) => {
  //   db.query(
  //     `UPDATE recipe SET image = '${image}', ingredient = '${ingredient}', videostep = '${videostep}' WHERE title LIKE '%${title}%'`,
  //     (err, result) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(result);
  //       }
  //     },
  //   );
  // }),
  updateRecipeById: (id_recipe,image) => new Promise((resolve, reject) => {
    db.query(
      `UPDATE recipe SET image = '${image}' WHERE id_recipe = ${id_recipe}`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  deleteRecipe: (id_recipe) => new Promise((resolve, reject) => {
    db.query(
      `DELETE FROM recipe WHERE id_recipe = ${id_recipe}`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
};
module.exports = recipeModel;
