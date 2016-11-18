var config = require("./webpack.config.js");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9000/", "webpack/hot/dev-server");
config.entry.app= config.entry.app.concat(process.argv.splice(2));

console.log(config.entry.app);

var conpiler = webpack(config);
var server = new WebpackDevServer(conpiler, {
	hot: true,
	quiet: false,
	historyApiFallback:true,
	colors: true
});

server.listen(9000, 'localhost', function() {
	console.log('the server start http://localhost:9000');
});
