// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = (_, { mode }) => {
  const plugins = [new CopyWebpackPlugin(['LICENCE'])];

  if (mode === 'production') {
    plugins.push(
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeScriptTypeAttributes: true,
        },
      }),
    );
    plugins.push(
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: '[name].[chunkhash].css',
        chunkFilename: '[id].[chunkhash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
    );
  } else {
    plugins.push(
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    );
  }

  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: (mode === 'production') ? false : 'source-map',
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: (mode === 'production') ? '[name].[chunkhash].js' : '[name].js',
      // path: path.resolve(__dirname, 'build'),
    },
    plugins,
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
            (mode === 'production') ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                // importLoaders: 1
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
  };

  if (mode === 'production') {
    config.optimization = {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    };
  }

  return config;
};
