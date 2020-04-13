import express from 'express';
import json2xml from 'json2xml';
import { appendLogger } from '../log/logger.js';
import { readFile } from 'fs';

import covid19ImpactEstimator from '../estimator/estimator.js';

const estimatorRouter = express.Router();

estimatorRouter.use(appendLogger);

estimatorRouter.post('/', (req, res) => {
  res.status(200).json(covid19ImpactEstimator(req.body));
});

estimatorRouter.post('/json', (req, res) => {
  res.status(200).json(covid19ImpactEstimator(req.body));
});

estimatorRouter.post('/xml', (req, res) => {
  res.type('text/xml');
  let result = covid19ImpactEstimator(req.body);
  res.status(200).send(json2xml(result));
});

estimatorRouter.get('/logs', (req, res) => {
  res.type('text/plain');
  res.status(200);
  readFile('./logs.log', { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

export { estimatorRouter };
