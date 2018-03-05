const client = require('../database/pgClient');

const app = require('./app');

client.connect();

app.listen(3003, () => console.log('listening on port 3003')); // eslint-disable-line no-console
