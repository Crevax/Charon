var webpack = require('webpack');
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
require('dotenv').config({silent: true});

var cssExtractor = new ExtractTextWebpackPlugin('styles/main.min.css');
var lifecycleEvent = process.env.npm_lifecycle_event;

var config = {
  entry: {
    app: './src/js/app.tsx',
    vendors: ['react', 'react-dom', 'react-router', 'redux', 'redux-thunk', 'es6-promise', 'superagent']
  },
  output: {
    publicPath: '/',
    path: __dirname + '/public',
    filename: 'js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loaders: ['eslint-loader', 'source-map-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        loader: "awesome-typescript-loader"
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname + '/public',
    proxy: {
    '/api': {
        target: process.env.API_HOST || 'localhost',
        pathRewrite: {'^/api' : ''},
        xfwd: true,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'js/vendors.js' })
  ]
};

switch (lifecycleEvent) {
  case 'build':
    config.module.rules.push({
      test: /\.css$/,
      loader: cssExtractor.extract(['css']),
      exclude: '/node_modules/'
    });

    config.plugins.push(cssExtractor);
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      sourceMap: true,
      minimize: true
    }));

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }));
    break;
  default:
    config.module.rules.push({
      test: /\.css$/,
      loaders: ['style', 'css'],
      exclude: '/node_modules/'
    });

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }));
}

module.exports = config;
