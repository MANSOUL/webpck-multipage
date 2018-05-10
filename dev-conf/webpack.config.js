const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		p1: path.resolve(__dirname, './app/p1/index.js'),
		p2: path.resolve(__dirname, './app/p2/index.js')
	},

	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].[chunkhash].js'
	},

	mode: 'production',

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'p1.html',
			chunks: ['p1']
		}),
		new HtmlWebpackPlugin({
			filename: 'p2.html',
			chunks: ['p2']
		})
	]
}