// Initialize the express framework
var express  	=  require('express');
var mongoose  =  require('mongoose');
var	bodyParser	=  require('body-parser');
var path = require('path');


// Express setup 
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'/client')));

// Routes set up
var router 	= express.Router();
//var search = require('./controller/search');
var Search = require('./models/search'); 

// Getting the cities
app.get('/location', function(req, res) {
    var search = new Search({
        city : req.param('city')
  });
  search.save().then((doc) => {
    res.send(doc);
}, (e) => {
    res.status(400).send(e);
});
});

// Register the routing
app.use('/', router);


//Connection with dataBase
mongoose.connect("mongodb://localhost/search", {
    useNewUrlParser: true
}, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

});

// Start up the server
var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Listening on port ' + port);
})

