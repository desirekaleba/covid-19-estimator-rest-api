import express from 'express';
import json2xml from 'json2xml';
import { readFile } from 'fs';

import covid19ImpactEstimator from '../estimator/estimator';

const estimatorRouter = express.Router();

function twoFirstRoutesResult(req, res) {
  res.status(200).json(covid19ImpactEstimator(req.body));
}

estimatorRouter.post('/', (req, res) => {
  twoFirstRoutesResult(req, res);
});

estimatorRouter.post('/json', (req, res) => {
  twoFirstRoutesResult(req, res);
});

estimatorRouter.post('/xml', (req, res) => {
  res.type('text/xml' && 'application/xml');
  const result = covid19ImpactEstimator(req.body);
  res.status(200);
  res.send(json2xml(result));
});

estimatorRouter.get('/logs', (req, res) => {
  res.type('text/plain');
  res.status(200);
  readFile('./logs.log', { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

export default estimatorRouter;
