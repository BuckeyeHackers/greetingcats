var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res){ 
    res.sendFile(__dirname + "/public/views/index.html");
});

app.post('/card/create', function(req, res){

});

app.get('/card/img360/list', function(req, res){

});

var port = 80;
app.listen(port);
console.log('Listening on port', port);
 
