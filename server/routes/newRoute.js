const express = require('express');
const fs = require('fs');
const path = require('path');

const newRoute = express.Router();

newRoute.get('*', (req, res) => {
  const imagePath = path.join(__dirname, '..', '..', 'images', `${req.url}`);
  fs.stat(imagePath, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendFile(imagePath);
    }
  });
});

module.exports = newRoute;
