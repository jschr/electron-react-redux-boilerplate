const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, '../src/renderer/app.js'),
  resolve: {
    alias: {
      'Components': path.resolve(__dirname, '../src/renderer/components'),
      'Pages': path.resolve(__dirname, '../src/renderer/pages'),  
      'Actions': path.resolve(__dirname, '../src/renderer/actions'),  
      'Reducers': path.resolve(__dirname, '../src/renderer/reducers'),
      'Selectors': path.resolve(__dirname, '../src/renderer/selectors')
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
      }
    ]
  },
  target: 'electron-renderer',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dev/index.html',
      title: 'MyApp',
      inject: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'cheap-source-map'
};
