module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          electron: '3.0',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['babel-plugin-webpack-alias', { config: './dev/webpack.common.config.js' }],
  ],
};
