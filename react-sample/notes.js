// config file location : https://webpack.github.io/docs/tutorials/getting-started/

/*

1. npm init - initialize the directory
2. make simple react app with app.js and index.html

3. install all the necessary packages stuff
	npm install react react-dom webpack --save

4. create webpack config file

	module.exports = {
		entry : "./app.js",
		output : {
			filename : "bundle.js"
		}
	}

5. run webpack, watch it fail...
	need to include loaders now for babel and react

6. search for 'babel setup', do webpack
	npm install --save-dev babel-loader babel-core babel-preset-env
	copy module config
	add env preset like this
		options : {
			presets : ['env']
		}

7. search for 'babel react', install like it says
	npm install --save-dev babel-cli babel-preset-react
	add presets : ['react']

8. create simple server.js
	var express = ...
	var app = express();

	app.get('/', function(req,res) {
		res.sendFile('index.html', { root : path.dirname})
	})

	app.listen(3000, function() {
		console.log();
	});

	PATH.DIRNAME is native node stuff

9. search express serve static
	we need this to server multiple static (js, css, html) files to the user

10. setup axios gets/posts in app.js

11. app.get('/someroute', function(req,res) { 
			something;
		}) 

12. for posts, we need to use body parser middleware
	app.use(bodyParser.json());
	npm i body-parser;

*/
 