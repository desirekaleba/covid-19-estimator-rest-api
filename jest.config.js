module.exports = {
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    verbose: true,
    coveragePathIgnorePatterns: [
        'node_modules',
        'coverage',
        'src/seeders',
        'src/index.js',
        'src/app.js',
        'src/models/index.js',
        'src/constants',
        'src/routes/index.js',
    ],
};