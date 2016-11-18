var fs = require('fs')
var path = require('path')

module.exports = {

  entry: path.resolve(__dirname, './server/runserver.js'),

  output: {
    path: __dirname+'/dist',
    filename: 'server.bundle.js',
    publicPath:'/'

  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-3' },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name:'./image/[hash:7].[ext]',
          limit: 10,
        }
      }
    ]
  }

}