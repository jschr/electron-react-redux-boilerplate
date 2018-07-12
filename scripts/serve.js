import { spawn } from 'child_process';
import electron from 'electron';
import browserSync from 'browser-sync';
import browserSyncConnectUtils from 'browser-sync/dist/connect-utils';

const bsync = browserSync.create();

const getRootUrl = (options) => {
  const port = options.get('port');
  return `http://localhost:${port}`;
};

const getClientUrl = (options) => {
  const pathname = browserSyncConnectUtils.clientScript(options);
  return getRootUrl(options) + pathname;
};

bsync.init(
  {
    ui: false,
    // Port 35829 = LiveReload's default port 35729 + 100.
    // If the port is occupied, Browsersync uses next free port automatically.
    port: 35829,
    ghostMode: false,
    open: false,
    notify: false,
    logSnippet: false,
    socket: {
      // Use the actual port here.
      domain: getRootUrl,
    },
  },
  (err, bs) => {
    if (err) return console.error(err);

    const child = spawn(electron, ['.', '--enable-logging'], {
      env: {
        ...{
          NODE_ENV: 'development',
          BROWSER_SYNC_CLIENT_URL: getClientUrl(bs.options),
        },
        ...process.env,
      },
      stdio: 'inherit',
    });

    child.on('close', () => {
      process.exit();
    });

    bsync.watch('build/**/*').on('change', bsync.reload);
  },
);
