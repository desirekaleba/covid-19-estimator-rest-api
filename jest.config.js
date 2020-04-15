
module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  verbose: true,
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    'src/logger/logger.js',
    'src/routes/estimator.js',
    'src/routes/index.js'
  ]
};