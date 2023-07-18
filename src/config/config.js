require('dotenv').config();

const config = {
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host:  process.env.PG_HOST,
  dialect: 'postgres'

}

module.exports = {
  development: config,
  test: config,
  production: config,
};

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('postgres', 'adminpostgres', '12345678', {
//   dialect: 'postgres',
//   host: 'database-kpi.c0ut8ilbtowu.us-east-1.rds.amazonaws.com',
//   port: '5432'
// }); // aqui funfou

// module.exports = sequelize;