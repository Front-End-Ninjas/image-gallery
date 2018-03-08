const { Client } = require('pg');

const client = new Client({
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER || '',
  database: process.env.POSTGRES_DB || 'image',
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT || 5432,
});

module.exports = client;
