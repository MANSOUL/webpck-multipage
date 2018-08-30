const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common')
const { buildDirName } = require('../config')
const webpackConfig = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCssAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        globals: {
          test: /\.js$/,
          minChunks: 1,
          name: 'common',
          priority: -20,
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: path.resolve(__dirname, '../node_modules'),
      use: [
        { loader: MiniCssExtractPlugin.loader },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]__[hash:base64:5]'
          }
        },
        { loader: 'postcss-loader' }
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, '../', buildDirName), {
      allowExternal: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
})

module.exports = webpackConfig