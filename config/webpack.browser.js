'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  context: process.cwd(),
  debug: true,
  devtool: 'eval-source-map',
  devServer: {
    port: 3100
  },
  entry: {
    angular2: [
      'rxjs',
      'reflect-metadata',
      'angular2/core',
      'angular2/router',
      'angular2/http',
    ],
    main: './src/main'
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
  output: {
    path: path.join(process.cwd(), 'build'),
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Guest Book' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new BrowserSyncPlugin({
      host: '0.0.0.0',
      proxy: 'http://localhost:3100'
    }, {
      reload: false
    })
  ],
  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },
  target: 'web'
}
