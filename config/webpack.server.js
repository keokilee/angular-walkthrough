'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: process.cwd(),
  debug: true,
  devtool: 'eval-source-map',
  entry: {
    server: './src/server'
  },
  externals: (context, request, cb) => {
    if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
      cb(null, `commonjs ${request}`)
    } else {
      cb()
    }

    return
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'tslint'],
        exclude: /node_modules/
      }
    ],
    noParse: [ /angular2\/bundles\//]
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  },
  output: {
    path: path.join(process.cwd(), 'build/'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
  ],
  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },
  target: 'node'
}
