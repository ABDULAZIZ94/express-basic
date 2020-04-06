var express = require('express');
var app = express();

var things = require('./things.js');

app.get('/', (req, res) => {
	res.send('hello world');
});

app.post('/hello', (req, res) => {
	res.send("you just called the post method  at 'hello' ! \n");
});

app.all('/test' ,(req, res) => {
	res.send("HTTP method does not have any effect on this route");
});

//dynamic route
app.get('/:id', (req, res) => {
	res.send('The id you specified is ' + req.params.id);
});

//complex dynamic route
app.get('/:id/:name',(req, res) => {
	res.send('my name is ' + req.params.name + ' and my id is ' + req.params.id);
});

app.use('/things', things);

app.listen(3000);