import request from 'supertest';
import app from '../app';
import data from '../__mocks__/estimator';

describe('/api/v1/on-covid-19', () => {
  describe('POST on /api/v1/on-covid-19, /api/v1/on-covid-19/json and /api/v1/on-covid-19/xml', () => {
    test('should respond with json and 200 status code', async (done) => {
      const res = await request(app).post('/api/v1/on-covid-19').send(data);
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.body).toHaveProperty('data');
      done();
    });

    test('should respond with json and 200 status code but with a /json url', async (done) => {
      const res = await request(app)
        .post('/api/v1/on-covid-19/json')
        .send(data);
      expect(res.status).toBe(200);
      expect(res.type).toEqual('application/json');
      expect(res.body).toHaveProperty('data');
      done();
    });

    test('should respond with xml and 200 status code', async (done) => {
      const res = await request(app).post('/api/v1/on-covid-19/xml').send(data);
      expect(res.status).toBe(200);
      expect(res.type).toBe('text/xml');
      done();
    });
  });

  describe('GET /api/v1/on-covid-19/', () => {
    describe('GET on /api/v1/on-covid-19/logs', () => {
      test('should return 200 status code and text/plain type', async (done) => {
        const res = await request(app).get('/api/v1/on-covid-19/logs');
        expect(res.status).toBe(200);
        expect(res.type).toBe('text/plain');
        done();
      });
    });
  });
});
