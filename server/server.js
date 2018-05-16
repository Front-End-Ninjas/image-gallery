const client = require('../database/pgClient');

const app = require('./app');

client.connect();

app.listen(8080, () => console.log('listening on port 8080')); // eslint-disable-line no-console
