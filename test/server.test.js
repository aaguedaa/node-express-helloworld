const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  test('responds with Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World');
  });
});