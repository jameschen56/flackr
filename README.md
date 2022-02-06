# Overview

This is a flackr clone of [Flickr](https://www.flickr.com/). flackr is a photo-sharing application where users can store and upload their favorite photos.




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




