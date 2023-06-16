require('dotenv').config();


console.log(process.env)

const Sequelize = require('sequelize');


console.log(process.env.DB_NAME)
console.log(process.env.DB_USER)
console.log(process.env.DB_PW)

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
