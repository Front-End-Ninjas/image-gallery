const client = require('../database/pgClient');

const app = require('./app');

client.connect();

app.listen(8081, () => console.log('listening on port 8081')); // eslint-disable-line no-console
