const path = require('path')
const merge = require('webpack-merge')
const {host, port} = require('../config.js')
const common = require('./webpack.common')
const webpackConfig = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    module: {
    	rules: [
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                use: [
                    { loader: 'style-loader'},
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
            }
    	]
    },
    devServer: {
        host,
        port,
        progress: true
    },
    plugins: []
})

module.exports = webpackConfig