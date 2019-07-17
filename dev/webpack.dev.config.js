const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, '../srс');
console.log(`default path of include files: ${defaultInclude}`);

module.exports = {
  entry: path.resolve(__dirname, '../src/renderer/index.js'),
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
      //   include: defaultInclude
      // },
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
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: false, // path.resolve(__dirname, '../build'),
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    before: () => spawn(
        'node',
        ['./dev/serve.js'],
        { shell: true, env: process.env, stdio: 'inherit' }
      )
      .on('close', code => process.exit(0))
      .on('error', spawnError => console.error(spawnError)
    )
  }
};

console.log(`contentBase: ${path.resolve(__dirname, '../build')}`)

