const express = require('express');
const images = require('./routes/images');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'images')));
app.use('/images', images);

app.get('/', (req, res) => res.status(200).send());

module.exports = app;
