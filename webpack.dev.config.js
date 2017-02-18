var webpack = require('webpack');
var path = require('path');
var websiteDir = path.resolve(__dirname, 'website');
var serverDir = path.resolve(__dirname, 'api');
var nodeModuleDir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var Ignore = new webpack.IgnorePlugin(/\.svg$/);

var config = {
	devtool: 'source-map',
	entry: {
		main: [path.resolve(websiteDir, 'scripts', 'main.js')],
		vendor: ['lodash', 'react', 'redux', 'react-slick', 'slick-carousel', 'isomorphic-fetch'],
	},
	output: {
		path: path.resolve(serverDir, 'public'),
		filename: '/scripts/[name].bundle.js',
		publicPath: '/public/',
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style', 'css', 'resolve-url', 'sass!sourceMap'),
		}, {
			test: /\.js$/,
			loaders: ['react-hot', 'babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']})],
			exclude: [nodeModuleDir]
		}, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=fonts/[name].[ext]'
        }, {
        	test: /\.(gif|png|jpg)$/,
        	loader: 'file-loader?name=[name].[ext]&publicPath=public&outputPath=images',
        }],
	},
	staticOptions: {
		
	},
	plugins: [
		new ExtractTextPlugin('/styles/main.css'),
		new webpack.optimize.CommonsChunkPlugin('vendor', '/scripts/vendor.js'),
	],
	devServer: {
		host: '0.0.0.0',
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8585/',
				secure: false
			}
		},
	}
};

module.exports = config;