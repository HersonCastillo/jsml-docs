const path = require('path');

const environment = process.env.NODE_ENV || 'dev';
const isDevelopment = environment !== 'prod';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './dist/main.js',
  watch: isDevelopment,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.d.ts'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts|.tsx$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
    ],
  },
};
