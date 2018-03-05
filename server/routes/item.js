const express = require('express');
const client = require('../../database/pgClient');

const item = express.Router();

item.get('/:id/images', (req, res) => {
  const queryID = `SELECT * FROM images WHERE product_id = ${req.params.id};`;
  client.query(queryID, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else if (result.rows.length === 0) {
      res.status(404).send('item not found in database');
    } else {
      res.send(result.rows);
    }
  });
});

module.exports = item;
