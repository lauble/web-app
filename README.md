# Web Application Template with React
:white_small_square: PostgreSQL
:white_small_square: Express 
:white_small_square: React
:white_small_square: Node
:white_small_square: Sequelize
:white_small_square: Axios
:white_small_square: Webpack

## :small_blue_diamond: Getting Started

To run on your local machine:
```
npm install
npm run build
npm start
```
This project is set up to run on local host port 8080. You can change the port number in the following file:
```
server/index.js
const PORT = 8080
```
Create your database in PostgreSQL and update the variable in the following file:
```
server/db/db.js
const dbName = YOUR_DB_NAME
```

## :small_blue_diamond: Scripts

| command                            | description                                                         |
|------------------------------------| --------------------------------------------------------------------|
| :radio_button: npm run seed        | runs seed file                                                      |
| :radio_button: npm run build       | runs webpack / builds bundle.js                                     |
| :radio_button: npm run build-watch | runs webpack and watches files / recompiles whenever they change    |

