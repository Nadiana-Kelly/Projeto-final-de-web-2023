const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'medicine',
  password: '123',
  port: 5433 // porta padrão do PostgreSQL
});

module.exports = pool;