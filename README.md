# Overview

Inspired by Flickr, [Flackr](https://flackr-app.herokuapp.com/) is a photo-sharing platform where users can store and upload their favorite photos.


# Index
|
[MVP Feature List](https://github.com/jameschen56/flackr/wiki/MVP-Features-List) |
[Database Schema](https://github.com/jameschen56/flackr/wiki/Database-Schema) |

# Technologies Used
  - React
  - Redux
  - Javascript / JSX
  - HTML
  - CSS
  - Express
  - Sequelize
  - PostgreSQL
  - Heroku

# Features
## Splash Page 
![Screen Shot 2022-02-13 at 3 07 02 PM](https://user-images.githubusercontent.com/87781597/163737131-e553d4dc-b843-4986-8acd-424ba320f358.png)

## Login & Signup 
![Screen Shot 2022-02-13 at 3 16 08 PM](https://user-images.githubusercontent.com/87781597/163737180-06d345b3-f92f-4ccc-967c-3932dd2f6eb1.png)
![Screen Shot 2022-02-13 at 3 20 17 PM](https://user-images.githubusercontent.com/87781597/163737202-2db6eaba-dd53-45b7-b994-ec0904a4b34c.png)

## Photostream
![Screen Shot 2022-02-13 at 3 22 10 PM](https://user-images.githubusercontent.com/87781597/163737246-92f5a94c-ffb9-4b53-adba-0d4445fcb5f1.png)

## Image Detail Page
![Screen Shot 2022-02-13 at 3 23 24 PM](https://user-images.githubusercontent.com/87781597/163737295-7f5b00c4-ae13-4874-b11c-cfc1477aa53a.png)


# Getting started

1. Clone this repo.

    * ```git clone https://github.com/jameschen56/flackr```

2. Install dependencies from the root directory.

    * ```npm install```

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.

    * ```CREATE USER <name> WITH CREATEDB PASSWORD <'password'>```

4. Create a .env file in the backend directory based on the .env.example found within the respective directory.

```
PORT=5000
DB_USERNAME=auth_app
DB_PASSWORD=«auth_app user password»
DB_DATABASE=auth_db
DB_HOST=localhost
JWT_SECRET=«generate_strong_secret_here»
JWT_EXPIRES_IN=604800
```

5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).

6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.

    * ```"proxy": "http://localhost:5000"```

7. Create Database, Migrate, and Seed models.

    * ```npx dotenv sequelize db:create```
    * ```npx dotenv sequelize db:migrate```
    * ```npx dotenv sequelize db:seed:all```

8. Open up backend and frontend directory, respectively. Start the server by running:

    * ```npm start```




