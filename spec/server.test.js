const request = require('supertest');
const app = require('../server/app');
const client = require('../database/pgClient');

describe('Test the root path', () => {

  beforeAll(() => client.connect());

  afterAll(() => client.end());

  test('It should respond to a valid GET with 200', () => {
    return request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });

  test('It should respond to an invalid GET with 404', () => {
    return request(app).get('/kappa').then((response) => {
      expect(response.statusCode).toBe(404);
    });
  });

  test('It should 404 on a nonexistent file', () => {
    return request(app).get('/item/9001/images').then((response) => {
      expect(response.statusCode).toBe(404);
    });
  });
});
