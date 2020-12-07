const mysql = require("mysql2");

const connection = async () => {
  const conn = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
  });

  return conn;
};

module.exports = connection;
