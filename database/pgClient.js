const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: process.env.POSTGRES_USER || '',
  database: process.env.POSTGRES_DB || 'admin',
});

module.exports = client;
