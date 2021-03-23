var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { json } = require('body-parser');
var jsonparser = bodyParser.json();


var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id , Qstr: req.query.qstr});
});

// mehtod POST - form
app.post('/person', urlencodedParser, function(req, res){
	res.send('here');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.post('/personjson', jsonparser, function(req, res){
	res.send('thank for your json');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
})

// app.post('/person', urlencodedParser, function(req, res) {
// 	res.send('Thank you!');
// 	console.log(req.body.firstname);
// 	console.log(req.body.lastname);
// });

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);