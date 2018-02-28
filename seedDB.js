const express = require('express');
const format = require('pg-format');
const pg = require('pg');
const path = require('path');
const fs = require('fs');

const app = express();

const PGUSER = 'admin';
const PGDATABASE = 'admin';
const DIRNAME = __dirname;

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

  // const dropQuery = format('DROP TABLE images;');
  // myClient.query(dropQuery, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(result.rows);
  // });
  // console.log(fs.readFileSync(DIRNAME + '/seed_data.js'));
  const createQuery = format('CREATE TABLE images (product_id int, large_image_url varchar, small_gallery_image_url varchar);');
  myClient.query(createQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result.rows);
  });

  const seedQuery = format('\\COPY images (product_id, large_image_url, small_gallery_image_url) FROM \'' + DIRNAME + '/seed_data.js\' WITH DELIMITER \',\';');
  myClient.query(seedQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result.rows);
  });
});

// ''COPY images (product_id, large_image_url, small_gallery_image_url) FROM \'' + DIRNAME + '/seed_data.js\' WITH DELIMITER \',\';'