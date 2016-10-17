var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cardModule = require("./modules/card");
var coreModule = require("./modules/core");

mongoose.connect('mongodb://admin:lollipop@ds053186.mlab.com:53186/greetingcats')

var app = express();
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/usercard'));
app.use(bodyParser.json());

coreModule(app);
cardModule(app);

/*
app.get('/', function (req, res){ 
    res.sendFile(__dirname + "/public/views/index.html");
});
*/





app.get('/card/img360/list', function(req, res){

});

var port = 80;
app.listen(port);
console.log('Listening on port', port);


 
