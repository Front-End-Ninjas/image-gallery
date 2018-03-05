const express = require('express');
const format = require('pg-format');
const pg = require('pg');
const seedData = require('./seed_data');

const app = express();
const PGUSER = 'admin';
const PGDATABASE = 'admin';


const config = {
  user: PGUSER, // name of the user account
  database: PGDATABASE, // name of the database
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);
let myClient;


pool.connect((err, client) => {
  if (err) {
    console.log(err);
  }
  app.listen(8000, () => {
    console.log('listening on 8000');
  });
  myClient = client;

  // WORKING CODE HERE -- IF TABLE EXISTS COMMENT IN LINE 35
  // myClient.query('DROP TABLE images;');
  myClient.query('CREATE TABLE images (product_id int, large_image_url varchar, small_gallery_image_url varchar);');
  seedData.forEach((data) => {
    client.query('INSERT INTO images (product_id, large_image_url, small_gallery_image_url) values ($1, $2, $3);', [data.product_id, data.large_image_url, data.small_gallery_image_url]);
  });
});

