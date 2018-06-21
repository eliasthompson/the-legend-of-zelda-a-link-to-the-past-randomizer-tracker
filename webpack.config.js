const webpack = require('webpack');
const path = require('path');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(ttf|eot|woff|woff2|png|jpeg|jpg|gif|ico)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'file-loader',
          options: {
            name: 'public/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.template.html',
    }),
  ],
  serve: {
    port: 8090,
    add: (app, middleware, options) => {
      app.use(convert(history()));
    },
  },
};
