<h1 align="center">Food Recipe</h1>

## Description
Food Recipe is a food recipe application developed using several technologies including PostgreSQL, Express.js, and React.js. This application allows users to view food recipes and delete, update, and make recipes.

## Run Project
Install package : npm i

Run Project : npm start

## Project Structure

```
|── Backend
   |── public    # File image from multer
   |── src       # Project source code
       |── config        # config db
       |── controller    # Logic/controller db
       |── helper        # setting env, generateJWT and standard response
       |── middleware    # setting Authentication, jwtAuth, and config multer (delete and upload image)
       |── model         # model / db query
       |── router        # route API
   |── .env            # Setting env backend to connecting   
   |── .gitignore      # File name for not uploaded on github
   |── .README.md      # For Readme In github
```

## Build With

<ul id="user-content-build-with" dir="auto">
  <li><a href="https://www.postgresql.org/" rel="nofollow">postgre SQL (for Database Management System)</a></li>
  <li><a href="https://www.postman.com/" rel="nofollow">Postman for API documentation management</a></li>
  <li><a href="https://www.npmjs.com/" rel="nofollow">NPM for dependency management</a></li>
  <li><a href="https://github.com/motdotla/dotenv">dotenv: for using environment variabels</a></li>
  <li><a href="https://helmetjs.github.io/" rel="nofollow">helmet: for set security HTTP headers</a></li>
  <li><a href="https://www.npmjs.com/package/xss" rel="nofollow">XSS: to sanitize untrusted HTML (to prevent XSS)</a></li>
  <li><a href="https://github.com/expressjs/cors">CORS: Cross-Origin Resourece-Sharing enabled using</a></li>
  <li><a href="https://github.com/kelektiv/node.bcrypt.js">bcrypt: for hashing password</a></li>
  <li><a href="https://eslint.org/" rel="nofollow">ESLINT: for linting and prettier code formatter</a></li>
  <li><a href="https://expressjs.com/" rel="nofollow">ExpressJS: for CRUD management</a></li>
  <li><a href="https://jwt.io/" rel="nofollow">JWT: for generate JSON WEB TOKEN</a></li>
  <li><a href="https://nodejs.org/en/" rel="nofollow">NodeJS</a></li>
  <li><a href="https://github.com/taufikrmdhan/tickitz_intermediateBE/blob/main/package.json">and you can see the dependencies used in the package.json</a></li>
</ul>

## Related Project
Frontend web Application.\
[frontend-FoodRecipe](https://github.com/taufikrmdhan/foodrecipe_react_redux)
<br/>
[deploy-FoodRecipe](https://foodrecipe-roan.vercel.app/)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
