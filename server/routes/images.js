const express = require('express');
const fs = require('fs');
const path = require('path');
const client = require('../../database/pgClient');

const images = express.Router();

images.get('/:id', (req, res) => {
  const queryID = `SELECT large_image_url FROM images WHERE product_id = ${req.params.id};`;
  console.log('THIS IS A QUERY ID', queryID);
  client.query(queryID, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result.rows);
  });

  // const imagePath = path.join(__dirname, '..', '..', 'images', `${result.rows[0].large_image_url}`);
  // console.log('THIS IS THE IMAGE PATH', imagePath);
  // fs.stat(imagePath, (err) => {
  //   if (err) {
  //     res.status(404).send(err);
  //   } else {
  //     res.sendFile(imagePath);
  //   }
  // });
});

module.exports = images;
