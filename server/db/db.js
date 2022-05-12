const Sequelize = require("sequelize");
const chalk = require("chalk");

// createdb and add db name here
const dbName = "";
console.log(chalk.blue(`Opening connection to ${dbName}`));

const db = new Sequelize(
    `postgres://localhost:5432/${dbName}`, {
        logging: false
});

const test = async () => {
    try {
        await db.authenticate();
        console.log(chalk.yellow('Connection has been established successfully.'));
    } catch (error) {
        console.error(`Unable to connect to the database, ${dbName}`, error);
    }
}
test();

module.exports = db;