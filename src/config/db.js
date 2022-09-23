const pg = require('pg');
const {
  DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER,
} = require('../helper/env');

const db = new pg.Pool({
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
  user: DB_USER,
});
db.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
  } else {
    console.log('Connection established');
  }
});
module.exports = db;
