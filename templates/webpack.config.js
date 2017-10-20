// -----------------------------------------
// Simple template for a Webpack config file
// -----------------------------------------
module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
	  rules: [
	    { 
				test: /\.js$/, 
				exclude: /node_modules/,
				loader: "babel-loader",
				options : {
					presets : ['env','react']
				}
			}
	  ]
	}
}
// -------------
// Entry : the file to transpile
// -------------
// Output : the file we output the bundle to
// -------------
// Now we need a babel loader
// https://babeljs.io/docs/setup/#installation
// -------------
// Now we can add presets/plugins
// 	the babel-preset-env enables transforms for ES6
// 	the babel-preset-react transforms JSX into createElement calls
//		added via this format to the babel-loader rule:
// 		options : { presets : ['env','react'] }
// -------------
