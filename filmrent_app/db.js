const { Pool } = require('pg');

function configureDB() {

  // Initialize database connection
  const conn = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'data_rent',
    password: '1324',
    port: 5432,
  });

  return conn;
}

// Export database connection
module.exports = { configureDB };