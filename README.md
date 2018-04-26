# electron-react-redux-boilerplate
[![Build Status](https://api.travis-ci.org/jschr/electron-react-redux-boilerplate.svg)](https://travis-ci.org/jschr/electron-react-redux-boilerplate)
[![dependencies Status](https://david-dm.org/jschr/electron-react-redux-boilerplate/status.svg)](https://david-dm.org/jschr/electron-react-redux-boilerplate)
[![devDependencies Status](https://david-dm.org/jschr/electron-react-redux-boilerplate/dev-status.svg)](https://david-dm.org/jschr/electron-react-redux-boilerplate?type=dev)

A minimal boilerplate to get started with [Electron](http://electron.atom.io/), [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/).

Including:

* [React Router](https://reacttraining.com/react-router/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk/)
* [Redux Actions](https://github.com/acdlite/redux-actions/)
* [Redux Local Storage](https://github.com/elgerlambert/redux-localstorage/)
* [Electron Packager](https://github.com/electron-userland/electron-packager)
* [Electron DevTools Installer](https://github.com/MarshallOfSound/electron-devtools-installer)
* [Electron Mocha](https://github.com/jprichardson/electron-mocha)
* [Browsersync](https://browsersync.io/)

## Quick start

Clone the repository
```bash
git clone --depth=1 git@github.com:jschr/electron-react-redux-boilerplate.git
```

Install dependencies
```bash
cd electron-react-redux-boilerplate
npm install
```

Development
```bash
npm run develop
```

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Packaging

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-builder/wiki/Options.

Create a package for OSX, Windows and Linux
```
npm run pack
```

Or target a specific platform
```
npm run pack:mac
npm run pack:win
npm run pack:linux
```

## Tests

```
npm run test
```

## Maintainers

- [@jschr](https://github.com/jschr)
- [@pronebird](https://github.com/pronebird)

## Apps using this boilerplate

- [Mullvad VPN app](https://github.com/mullvad/mullvadvpn-app)
- [YouTube Downloader Electron](https://github.com/vanzylv/youtube-downloader-electron)
