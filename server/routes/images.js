const express = require('express');
const fs = require('fs');
const path = require('path');

const images = express.Router();

images.get('/:id', (req, res) => {
  const imagePath = path.join(__dirname, '..', '..', 'images', `automotive/${req.params.id}.jpg`);

  fs.stat(imagePath, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendFile(imagePath);
    }
  });
});

module.exports = images;
