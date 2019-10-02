// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    new CopyWebpackPlugin(['LICENCE']),
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
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage', // or "entry"
                  corejs: 3,
                },
              ],
            ],
            plugins: [],
          },
        },
      },
      {
        test: /\.json5$/,
        use: {
          loader: 'json5-loader',
        },
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};

module.exports = config;
