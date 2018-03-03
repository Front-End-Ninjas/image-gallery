const client = require('../database/pgClient');

const app = require('./app');

client.connect();

app.listen(3000, () => console.log('listening on port 3000')); // eslint-disable-line no-console
