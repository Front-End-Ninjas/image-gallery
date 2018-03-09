const { Client } = require('pg');
console.log('DATABASE NAME', process.env.POSTGRES_DB || process.env.RDS_DB_NAME || 'image');
console.log('HOST NAME', process.env.POSTGRES_HOST || process.env.RDS_HOSTNAME || 'localhost');
const client = new Client({
  host: process.env.POSTGRES_HOST || process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.POSTGRES_USER || process.env.RDS_USERNAME || '',
  database: process.env.POSTGRES_DB || process.env.RDS_DB_NAME || 'image',
  password: process.env.POSTGRES_PASSWORD || process.env.RDS_PASSWORD,
  port: process.env.POSTGRES_PORT || process.env.RDS_PORT || 5432,
});

module.exports = client;
