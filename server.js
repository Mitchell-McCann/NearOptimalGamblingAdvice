// server.js 
	
	//set up 
	var express		= require('express');
	var app 		= express(); 				//create app with express
	var morgan 		= require('morgan');		//logs requests to console
	var bodyParser 	= require('body-parser'); 	//pull information from POST requests 
	var methodOverride = require('method-override'); //simulate DELETE requests

	//Poker Evals
	var PokerEvaluator = require("poker-evaluator");
	var texas = require('texas');
	


	// config 

	app.use(express.static(__dirname + '/public'));									//set the static files location  
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
	app.use(bodyParser.json()); 									// parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	app.use(methodOverride());


	// routes ============================

		// api

		// get evaulation for 3 cards
		app.get('/test/evalulate3', function(req, res) {

			res.json(PokerEvaluator.evalHand(["As", "Ac", "Qs"]));

		});

		app.get('/test/evalulate5', function(req, res) {

			res.json(PokerEvaluator.evalHand(["As", "Ac", "Ad", "5d", "5s"]));

		});


		app.get('/test/evalulate7', function(req, res) {

			res.json(PokerEvaluator.evalHand(["As", "Ks", "Qs", "Js", "Ts", "3c", "5h"]));
			
		});
		


	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file
	});


	// listen (start app with node server.js) ======================================
	app.listen(3000);
	console.log("App listening on port 3000");