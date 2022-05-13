const chalk = require('chalk');
const { db } = require('../db');

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log(chalk.green('Seeding success!'));

    // seed your database here!

    db.close();
    console.log('Database closed');
  } catch (err) {
    console.log(chalk.red(err));
  }
};
seed();

module.exports = seed;
