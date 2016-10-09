const path = require('path')

module.exports = {
  entry: './client/app.js',
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.*css$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  sassLoader: {
   includePaths: [path.resolve(__dirname, "./client/sass")]
 },
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  }
}
