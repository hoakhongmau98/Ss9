var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
// head

app.set('view engine', 'ejs')
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
    console.log('Request Url: ' + req.url);
    next(); // call back
});


// body
app.get('/', function(req, res){
    // res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>HuyenChi</h1></body></html>');
	res.render('index'); // rendering index.ejs by app.set('view engine', 'ejs')
});

app.get('/api', function(req, res){
    res.json({firstname: 'Jon', lastname: 'Doe'});
});
app.get('/name:id', function(req, res){
    res.send('<html><head></head><body><h1>HuyenChi ' + req.params.id + '</h1></body></html>')
    console.log(req.params.id);
});

app.listen(port);                  
// app.route('/api')