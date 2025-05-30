const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('GET /', () => {
  it('responds with Hello message', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello DevOps World!');
  });
});