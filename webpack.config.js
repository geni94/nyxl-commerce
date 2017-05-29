var webpack = require('webpack')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
	entry: [
		'./src/main.js'
	],
	output: {
		path: "/build/js",
		publicPath: "/build",
		filename: "app.js"
	},
	watch: true,
	module: {
		loaders:
		[
			{
				test: /\.js$/,
				exclude: /node_modules|vue\/src|vue-router\//,
				loader: 'babel'
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				loader: 'url-loader?importLoaders=1&limit=100000'
			},
			{
				test: /\.html$/,
				loader: 'vue-template-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			}
		]
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin()
	],
	babel: {
		presets: ['es2015'],
		plugins: 'transform-runtime'
	}
}