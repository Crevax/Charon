var webpack = require('webpack');

var config = {
  entry: {
    app: './src/js/app.jsx',
    vendors: ['react', 'react-dom', 'react-router', 'redux', 'redux-thunk', 'es6-promise']
  },
  output: {
    publicPath: '/',
    path: __dirname + '/public',
    filename: 'js/app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /node_modules/
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
      },
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
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')
  ]
};

switch (lifecycleEvent) {
  case 'build':
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
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }));
}

module.exports = config;
