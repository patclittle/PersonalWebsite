var path = require('path');
module.exports = {
  entry: [
    './views/components/index.js'
  ],
  output: {
    path: path.join(__dirname,'public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};