import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost', // Replace with your host
  user: 'root',      // Replace with your username
  password: 'Atesh@1710',      // Replace with your password
  database: 'school', // Replace with your database name
});

export default db;
