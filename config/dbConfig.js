const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

console.log('DB Config:', dbConfig); // Adicione esta linha para verificar os valores

const pool = mysql.createPool(dbConfig);


module.exports = pool;