const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dist/main.js',
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
        loader: "babel-loader"
      },
      {
        test: /\.ts|.tsx$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
    ],
  },
};
