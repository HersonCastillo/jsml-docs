const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const environment = process.env.NODE_ENV || 'dev';
const isDevelopment = environment !== 'prod';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/main.ts',
  output: {
    filename: isDevelopment ? '[id].bundle.js' : '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.d.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: 'all',
      minify: !isDevelopment,
    }),
  ],
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
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
    ],
  },
};
