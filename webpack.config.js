var path = require("path");
var webpack = require("webpack");

module.exports = {
	devtool: false,
	entry: {
		// 'ni': ['./src/index.js'],
		'ni': ['./src/Vue/index.js'],

		'vue-ni': ['./src/Vue/index.js'],
		
		'vue-ni-simple':['./src/Vue/simple.js'],

		'ni.Broadcast': ['./src/Plus/Broadcast.next.js'],
		
		
	},
	output: {
		path: path.resolve(__dirname, "dist"), 
		// path: path.resolve(__dirname, "App/js"),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: "babel"}
  	]
	},
	plugins: [
		new webpack.BannerPlugin("Ni.js V1.0.3 By NewsNing"),
    // new webpack.HotModuleReplacementPlugin()
		new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
