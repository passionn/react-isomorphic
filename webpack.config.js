var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var autoprefixer = require('autoprefixer');

var pgk=require('./package.json');
var banner=[
	'Update:'+ new Date().toLocaleString(),
	'author:'+ (pgk.author || "*"),
	'Email:'+ (pgk.email || "*")
];

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
		},
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
		},
		{
			test: /\.json$/,
			loader: 'json-loader'
		},
		{
			test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
			loader: 'url-loader',
			query: {
				name:'./image/[hash:7].[ext]',
				limit: 10
			}
		}]
	},
	plugins: [
		new webpack.BannerPlugin(banner.join('\n')),
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
	],
	postcss: function () {
        return [autoprefixer];
    }
};