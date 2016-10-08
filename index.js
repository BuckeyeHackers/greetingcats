var express = require('express');
var fs = require('fs');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));


app.get('/', function (req, res){ 
    res.sendFile("/index.html");
});

app.post('/card/create', function(req, res){
    
});

var port = 9000;
app.listen(port);
console.log('Listening on port', port);
 