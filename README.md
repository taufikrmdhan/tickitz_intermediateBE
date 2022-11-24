<h1 align="center">Hire Job</h1>

## Description
Hirejobs adalah sebuah aplikasi untuk mencari kerja yang dikembangkan menggunakan beberapa teknologi diantaranya : PostgreSQL, Express.js, dan Next.js. Pada aplikasi ini, user bisa login sebagai perekrut dan pencari kerja. Dalam menu pencari kerja nanti akan menampilkan list user pencari kerja beserta beberapa informasi terkait data pribadinya, selain itu user juga bisa melakukan CRUD pada halaman profile nya sendiri. Dalam menu perekrut nanti akan menampilkan list perekrut beserta beberapa data perusahaannya, serta perekrut juga dapat melakukan CRUD pada halaman profile perekrutnya.

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