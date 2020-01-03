const path = require('path');
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = ({mode} = {mode: "production"}) => {
	console.log(`mode is: ${mode}`);

	return{
		mode,
	  	entry: './src/index.js',
		devServer: {
	  		hot: true,
	  		open: true
	  	},
	  	output: {
	    	path: path.join(__dirname, 'public'),
	    	filename: 'bundle.js'
	  	},
	 	module: {
	    	rules: [
	      	{
	        	test: /\.js$/,
	        	exclude: /node_modules/,
	        	loader: 'babel-loader'
	      	},
	      	{
		      test: /\.css$/,
		      use: ['style-loader', 'css-loader']
		    }
	    	]
	  	},
	  	devtool: 'cheap-module-eval-source-map',
	  	devServer: {
	    	contentBase: path.join(__dirname, 'public')
	  	},
	  	plugins: [
	    	new HtmlWebPackPlugin({
	      	template: "./src/index.html",
	      	filename: "./index.html"
	    	}),
	    	new webpack.HotModuleReplacementPlugin()
	  	]
	}
};