var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'scripts');
var STYLE_DIR = path.resolve(__dirname, 'styles');

var config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
	module : {
    loaders : [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
