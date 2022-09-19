// konsep mvc
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
// buat route
const cors = require('cors');
// const userRoute = require('./src/router/user.routes');
// const recipeRoute = require('./src/router/recipe.routes');
// const commentRoute = require('./src/router/comment.routes');

const app = express();

try {
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(xss());
//   app.use(userRoute, recipeRoute, commentRoute);
} catch (error) {
  console.log(error);
}

// jalankan express
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
