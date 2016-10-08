var express = require('express');
var fs = require('fs');
var cardController = require('/controllers/card');

var app = express();

app.set('view engine', 'html');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/assets'));


app.get('/', function (req, res){ 
    res.render("index");
});

app.post('/card/create', function(req, res){

});

app.get('/card/img360/list', function(req, res){

}

var port = 9000;
app.listen(port);
console.log('Listening on port', port);
 