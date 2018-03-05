const express = require('express');
const fs = require('fs');
const path = require('path');

const newRoute = express.Router();

newRoute.get('*', (req, res) => {
  console.log('THIS IS REQ', req.url);
  const imagePath = path.join(__dirname, '..', '..', 'images', `${req.url}`);
  console.log('THIS IS THE IMAGE PATH', imagePath);
  fs.stat(imagePath, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendFile(imagePath);
    }
  });
});

module.exports = newRoute;
