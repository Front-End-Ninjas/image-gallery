const express = require('express');
const item = require('./routes/item');
const newRoute = require('./routes/newRoute');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.static(path.join(__dirname, '..', 'images')));
app.use('/item', item);
app.use('/newRoute', newRoute);

app.get('/', (req, res) => res.status(200).send());

module.exports = app;
