const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { routes, buildDirName, publicPath } = require('../config.js')
const appPath = path.resolve(__dirname, '../app/')
const webpackConfig = {
    entry: {},
    output: {
        path: path.resolve(__dirname, '../', buildDirName),
        filename: '[name].[hash].js',
        publicPath
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, '../app')
                ],
                exclude: [
                    path.resolve(__dirname, '../node_modules')
                ],
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
    ]
}

routes.forEach(r => {
    const { name } = r
    webpackConfig.entry[name] = path.resolve(appPath, `${name}/index.js`)
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            template: path.resolve(appPath, `${name}/index.html`),
            filename: `${name}.html`,
            chunks: [name]
        })
    )
})

module.exports = webpackConfig
