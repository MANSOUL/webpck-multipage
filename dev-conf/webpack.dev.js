const merge = require('webpack-merge')
const {host, port} = require('../config.js')
const common = require('./webpack.common')
const webpackConfig = merge(common, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        host,
        port,
        progress: true
    },
    plugins: []
})

module.exports = webpackConfig