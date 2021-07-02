// Gulp can watch our files for changes. ... We can tell Gulp to watch for changes to specific files, or every file with a specific extension
// - all . css files for example - or entire directories, or any combination you can think of.
// When Gulp spots a change it will re-run the tasks we tell it to run.
// https://www.google.com/search?q=watch+gulp+definition&oq=watch+gulp+definition&aqs=chrome..69i57j35i39j46i67j0i67j69i60l3j69i65.10314j0j7&sourceid=chrome&ie=UTF-8

const { parallel, series, watch } = require('gulp');
const electron = require('./electron');
const hotreload = require('./hotreload');
const assets = require('./assets');
const scripts = require('./scripts');

function watchMainScripts() {
  return watch(['app/main/**/*.js'], series(scripts.developBuild, electron.stop, electron.start));
}

function watchRendererScripts() {
  return watch(['app/renderer/**/*.js'], series(scripts.developBuild, hotreload.reload));
}

function watchHtml() {
  return watch(
    ['app/renderer/index.html'],
    series(assets.copyHtml, hotreload.inject, hotreload.reload),
  );
}

watchMainScripts.displayName = 'watch-main-scripts';
watchRendererScripts.displayName = 'watch-renderer-scripts';
watchHtml.displayName = 'watch-html';

exports.start = series(
  assets.copyHtml,
  scripts.developBuild,
  hotreload.start,
  electron.start,
  parallel(watchMainScripts, watchRendererScripts, watchHtml),
);
