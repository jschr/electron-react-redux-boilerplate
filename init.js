var path = require('path');
var cacheDir = path.join(__dirname, 'cache');

if (process.env.NODE_ENV === 'development') {
  require('electron-compile').initWithOptions({
    cacheDir: cacheDir,
    js: {
      stage: 2
    }
  });
} else {
  require('electron-compile').initForProduction(cacheDir);
}
require('./app/main');

