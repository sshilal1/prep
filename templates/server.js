// -------------------------------------
// Simple template for an Express Server
// -------------------------------------
const express = require('express');
const app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile('index.html', { root : __dirname } )
})

app.get('/data', function (req,res) {
	res.send('a GET request');
})

app.post('/user', function (req,res) {
	var content = req.body;
	res.send("a POST request");
})

app.listen(3000, function() {
	console.log("Listening on port 3000...");
})
// -------------
// Import the necessary modules
// -------------
// Serve files from a static directory
// -------------
// If we want to use POST, we need to use body-parser
// 	express 4.x requires it to parse POST bodys
// -------------
// Serve index.html for root requests
// -------------
// A simple POST and GET request
// -------------
// Listen on localhost port 3000
// -------------