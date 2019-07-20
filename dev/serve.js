const { spawn } = require('child_process');
const electron = require('electron');
const watch = require('node-watch');

const onCloseElectron = () => process.exit();

const runElectron = () => {
  const child = spawn(electron, ['./src/main/index.js', '--enable-logging'], {
    env: {
      ...{ NODE_ENV: 'development' },
      ...process.env,
    },
    stdio: 'inherit',
  });

  child.on('close', onCloseElectron);

  return child;
};


let child = runElectron();

const updateChild = () => { 
  child.removeListener('close', onCloseElectron);
  child.kill();
  child = runElectron();
};

watch('src/main/', { recursive: true, filter: /\.js$/ }, (evt, name) => {
  console.info(`File was changed: ${name}`);
  updateChild();
});
