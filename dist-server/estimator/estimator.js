"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _challenge = _interopRequireDefault(require("./challenge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const impact = {};
const severeImpact = {};

const covid19ImpactEstimator = data => {
  const challenge = new _challenge.default(data, impact, severeImpact);
  challenge.challengeOne();
  challenge.challengeTwo();
  challenge.challengeThree();
  return {
    data,
    impact,
    severeImpact
  };
};

var _default = covid19ImpactEstimator;
exports.default = _default;