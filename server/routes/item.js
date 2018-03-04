const express = require('express');
const fs = require('fs');
const path = require('path');
const client = require('../../database/pgClient');

const item = express.Router();

item.get('/:id/images', (req, res) => {
  const queryID = `SELECT * FROM images WHERE product_id = ${req.params.id};`;
  console.log('THIS IS A QUERY ID', queryID);
  client.query(queryID, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else if (result.rows.length === 0) {
      res.status(404).send('item not found in database');
    } else {
      console.log(result.rows);
      res.send(result.rows);
    }
  });
});

module.exports = item;
