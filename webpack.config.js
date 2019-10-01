// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
  devtool: false,
  entry: {
    index: './src/index.js',
  },
  output: {
    // filename: '[name].[chunkhash].js',
    // path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    // new MomentLocalesPlugin({
    //   localesToKeep: ['fr']
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
      },
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/contact.html',
    //   chunks: ['contact']
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [],
          },
        },
      },
    ],
  },
};

module.exports = config;
