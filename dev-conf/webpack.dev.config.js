const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { routes } = require('../config.js')
const {host, port} = require('../config.js')
const appPath = path.resolve(__dirname, '../app/')
const webpackConfig = {
    entry: {},
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].[hash].js'
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
    	rules: [
    		{
    			test: /\.jsx?$/,
    			include: [
    				path.resolve(__dirname, '../app')
    			],
    			exclude: [
    				path.resolve(__dirname, '../node_modules')
    			],
    			loader: 'babel-loader'
    		},
    		{
    			test: /\.css$/,
    			exclude: path.resolve(__dirname, '../node_modules'),
    			use: [
    				{loader: 'style-loader'},
    				{
    					loader: 'css-loader',
    					options: {
    						modules: true,
    						importLoaders: 1,
    						localIdentName: '[local]__[hash:base64:5]'
    					}
    				},
    				{loader: 'postcss-loader'}
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