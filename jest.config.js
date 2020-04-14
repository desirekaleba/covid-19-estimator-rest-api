
module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  verbose: true,
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    'src/index.js',
    'src/app.js',
    'src/logger/logger.js',
    'src/routes/estimator.js'
  ],
  moduleNameMapper: {
    // translate all your custom paths here, read the doc in the link above
    '^@finder/(.*)$': '<rootDir>/files-manipulation/$1',
    '^@metadata/(.*)$': '<rootDir>/folder-metadata/$1',
    '^@logger/(.*)$': '<rootDir>/logging/$1'
    // ...and so on
  }
};