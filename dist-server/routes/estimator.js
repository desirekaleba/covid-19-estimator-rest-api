"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _json2xml = _interopRequireDefault(require("json2xml"));

var _fs = require("fs");

var _estimator = _interopRequireDefault(require("../estimator/estimator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const estimatorRouter = _express.default.Router();

estimatorRouter.post('/', (req, res) => {
  res.status(200).json((0, _estimator.default)(req.body));
});
estimatorRouter.post('/json', (req, res) => {
  res.status(200).json((0, _estimator.default)(req.body));
});
estimatorRouter.post('/xml', (req, res) => {
  res.type('text/xml');
  res.type('application/xml');
  const result = (0, _estimator.default)(req.body);
  res.status(200);
  res.send((0, _json2xml.default)(result));
});
estimatorRouter.get('/logs', (req, res) => {
  res.type('text/plain');
  res.status(200);
  (0, _fs.readFile)('./logs.log', {
    encoding: 'utf-8'
  }, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
var _default = estimatorRouter;
exports.default = _default;