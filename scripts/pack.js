import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';
import packager from 'electron-packager';
import { createCompilerHostFromProjectRoot as createCompiler } from 'electron-compile';

const rootDir = path.resolve(__dirname, '../');
const cacheDir = path.join(rootDir, '.cache');
const appDir = path.join(rootDir, 'app');
const packagePath = path.join(rootDir, 'package.json');
const mainJSPath = path.join(rootDir, 'main.js');

const appPackage = require(packagePath);

function getFiles(dir) {
  let files = [];
  fs.readdirSync(dir).forEach((name) => {
    const fp = path.join(dir, name);
    const stat = fs.statSync(fp);

    // ignore dot files
    if(name.startsWith('.')) {
      return;
    }

    if(stat.isDirectory()) {
      const children = getFiles(fp);
      files.push(...children);
    } else {
      files.push(fp);
    }
  });
  return files;
}

async function main() {
  let source = [packagePath, mainJSPath, ...getFiles(appDir)];

  if(!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }

  let compilerHost;

  try {
    compilerHost = await createCompiler(rootDir, cacheDir);
  } catch(e) {
    console.log(`Couldn't set up compilers: ${e.message}`);
    throw e;
  }
  
  await Promise.all(source.map(async (f) => {
    try {
      console.log(`Compile ${f}`);
      await compilerHost.compile(f);
    } catch (e) {
      console.error(`Failed to compile file: ${f}`);
      console.error(e.message);
    }
  }));

  const options = {
    dir: rootDir,
    name: appPackage.name,
    platform: [
      'darwin', // macOS: outside of AppStore distribution
      //'mas', // macOS: AppStore distribution
      //'win32', 
      //'linux'
    ],
    arch: [ 'x64' ],
    overwrite: true,
    prune: true,
    asar: true,
    out: 'dist',
    ignore: [
      'scripts', 'test', 'dist', 'README.md',
      '.git', '.gitignore', 
      '.babelrc', '.eslintignore', '.eslintrc'
    ]
  };

  packager(options, (err, appPath) => {
    if (err) return console.error(err);
    console.log(appPath);

    // erase cache so it does not bother us during development.
    rimraf.sync(cacheDir);
  });
}

main();
