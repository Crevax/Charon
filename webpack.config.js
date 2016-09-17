var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/js/app.jsx',
    vendors: ['react', 'react-dom', 'react-router', 'redux', 'redux-thunk', 'es6-promise']
  },
  output: {
    path: './public/js/',
    publicPath: '/js/',
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: '/node_modules/',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    proxy: {
    '/api': {
        target: 'http://api.cjdavis.me',
        pathRewrite: {'^/api' : ''},
        xfwd: true,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true
    })
  ]
};
