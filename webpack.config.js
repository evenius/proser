const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['whatwg-fetch','./client/app.js'],
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
        loader: ExtractTextPlugin.extract('css!sass', { publicPath: '../'})
      }
    ]
  },
  devtool: 'source-map',
  sassLoader: {
   includePaths: [path.resolve(__dirname, "client/lib/sass")]
 },
 plugins: [
   new ExtractTextPlugin('style.bundle.css', {
       allChunks: true
   })
 ],
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  }
}
