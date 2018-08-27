const path = require('path')
const merge = require('webpack-merge')
const {host, port, proxy} = require('../config.js')
const common = require('./webpack.common')
let devServer = {
    host,
    port,
    proxy: {},
    progress: true
}
for (let key in proxy) {
    devServer.proxy[key] = proxy[key]
}
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
    devServer,
    plugins: []
})

module.exports = webpackConfig
