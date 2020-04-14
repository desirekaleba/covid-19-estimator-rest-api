"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = _interopRequireDefault(require("winston"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = _winston.default.createLogger({
  format: _winston.default.format.combine(_winston.default.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss:ms'
  }), _winston.default.format.printf(info => `${info.message}`)),
  transports: [new _winston.default.transports.File({
    filename: './logs.log',
    json: false
  })]
});

logger.stream = {
  write: message => logger.info(message.slice(0, message.length - 1))
};
const appendLogger = (0, _morgan.default)(':method    :url    :status     :response-time ms', {
  stream: logger.stream
});
var _default = appendLogger;
exports.default = _default;