const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./webpack.common.config');
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    path: path.resolve(__dirname, '../pre-build/')
  },
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
