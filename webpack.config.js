const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    bundle2: './app.js',
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './build',
    port: '8089',
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env'
            ],
            compact: false
          },
        },
      }
    ]
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin(),
  // ],
  mode: 'development'
};
