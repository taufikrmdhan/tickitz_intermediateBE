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

## Related Project
Frontend web Application.\
[frontend-FoodRecipe](https://github.com/taufikrmdhan/foodrecipe_react_redux)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
