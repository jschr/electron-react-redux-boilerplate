module.exports = {
  all: true,
  exclude: [
    'dev/**/*.js', 
    'pre-build/**/*.js',
    '*.config.js',
    'coverage',
    '**/*.spec.js',
  ],
  extension: ['.js', '.jsx'],
  reporter: ['text-summary', 'lcov'],
  'temp-dir': 'coverage/.nyc_output',
};
