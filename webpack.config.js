var webpack = require('webpack');

module.exports = {
	entry: {
		app: ["./app/index.js"]
	},
	output: {
		path: __dirname+'/dist',
		filename: "js/bundle.js",
		publicPath:'/'
	},
	devtool: 'source-map',
	devServer: {
    	historyApiFallback: true,
    	hot: true,
    	inline: true,
    	progress: true
  	},
	module: {
		loaders: [{
			test: /\.js|\.jsx$/,
			exclude: /node_modules/,
			loader: "babel",
			query: {
				presets: ["es2015","react","stage-3"]
			}
		}, {
			test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
			loader: 'url-loader',
			query: {
				name:'./image/[hash:7].[ext]',
				limit: 10
			}
		}]
	},
	plugins: [
		/*new webpack.SourceMapDevToolPlugin({
			filename: 'bundle.js.map'
		}),*/
		new webpack.HotModuleReplacementPlugin()
		/*,
				new webpack.DefinePlugin({
					'process.env':{
						'NODE_ENV':'"production"'
					}
				})*/
	]
};