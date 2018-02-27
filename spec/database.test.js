const { Client } = require('pg');

let connectionString;
if (process.env.POSTGRES_USER && process.env.POSTGRES_DB) {
  connectionString = `postgresql://${process.env.POSTGRES_USER}@localhost/${process.env.POSTGRES_DB}`;
} else {
  connectionString = 'postgres://localhost/admin';
}

const client = new Client(connectionString);

describe('Test querying the database', () => {
  beforeAll(() => client.connect());

  afterAll(() => client.end());

  test('Should get an array length of 1360', () => {
    expect.assertions(2);
    return client.query('SELECT * FROM images')
      .then((res) => {
        expect(res.rows).toBeInstanceOf(Array);
        expect(res.rows.length).toBe(1500);
      });
  });

  test('Should get 5 large image urls when queried with product id', () => {
    expect.assertions(3);
    return client.query('SELECT large_image_url FROM images WHERE product_id = 1')
      .then(({ rows }) => {
        expect(rows.length).toBe(5);
        expect(rows[0]).toBeInstanceOf(Object);
        expect(rows[0].large_image_url).toBe('\'movies/url1.jpg\'');
      });
  });

  test('Should get 5 small gallery image urls when queried with product id', () => {
    expect.assertions(3);
    return client.query('SELECT small_gallery_image_url FROM images WHERE product_id = 1')
      .then(({ rows }) => {
        expect(rows.length).toBe(5);
        expect(rows[0]).toBeInstanceOf(Object);
        expect(rows[0].small_gallery_image_url).toBe('\'movies/url1.jpg\'');
      });
  });
});
