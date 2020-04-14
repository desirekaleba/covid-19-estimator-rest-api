"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _app = _interopRequireDefault(require("../app"));

var _estimator = _interopRequireDefault(require("../__mocks__/estimator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('/api/v1/on-covid-19', () => {
  describe('POST on /api/v1/on-covid-19, /api/v1/on-covid-19/json and /api/v1/on-covid-19/xml', () => {
    test('should respond with json and 200 status code', async done => {
      const res = await (0, _supertest.default)(_app.default).post('/api/v1/on-covid-19').send(_estimator.default);
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.body).toHaveProperty('data');
      done();
    });
    test('should respond with json and 200 status code but with a /json url', async done => {
      const res = await (0, _supertest.default)(_app.default).post('/api/v1/on-covid-19/json').send(_estimator.default);
      expect(res.status).toBe(200);
      expect(res.type).toEqual('application/json');
      expect(res.body).toHaveProperty('data');
      done();
    });
    test('should respond with xml and 200 status code', async done => {
      const res = await (0, _supertest.default)(_app.default).post('/api/v1/on-covid-19/xml').send(_estimator.default);
      expect(res.status).toBe(200);
      expect(res.type).toBe('text/xml');
      done();
    });
  });
  describe('GET /api/v1/on-covid-19/', () => {
    describe('GET on /api/v1/on-covid-19/logs', () => {
      test('should return 200 status code and text/plain type', async done => {
        const res = await (0, _supertest.default)(_app.default).get('/api/v1/on-covid-19/logs');
        expect(res.status).toBe(200);
        expect(res.type).toBe('text/plain');
        done();
      });
    });
  });
});