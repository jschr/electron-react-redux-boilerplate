const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');
const { spawn } = require('child_process');
const electron = require('electron');
const watch = require('node-watch');

let electronInstance;

const onCloseElectron = () => process.exit();

const runElectron = () => {
  const instance = spawn(electron, ['./src/main/index.js', '--enable-logging'], {
    env: {
      ...{
        NODE_ENV: 'development',
        ELECTRON_DISABLE_SECURITY_WARNINGS: true,
      },
      ...process.env,
    },
    stdio: 'inherit',
  });

  instance.on('close', onCloseElectron);

  return instance;
};

const updateChild = () => {
  electronInstance.removeListener('close', onCloseElectron);
  electronInstance.kill();
  electronInstance = runElectron();
};

const compiler = webpack(config);

const devServerOptions = Object.assign({}, config.devServer, {
  hot: true,
  host: 'localhost',
  stats: {
    colors: true,
    chunks: false,
    children: false,
  },
  after: () => {
    electronInstance = runElectron();
    watch('src/main/', { recursive: true, filter: /\.js$/ }, (evt, name) => {
      console.info(`File was changed: ${name}`);
      updateChild();
    });
  },
});

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, 'localhost', () => {
  console.log('Server listened on localhost:8080');
});
