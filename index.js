var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var temp = require('./models/vrcard');
var cardController = require('./controllers/templateController');
var bodyParser = require('body-parser');
var dataBaseURL = "WOAHCANTSHOWTHAT"

mongoose.connect('mongodb://admin:lollipop@ds053186.mlab.com:53186/greetingcats')

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/usercard'));
app.use(bodyParser.json());

app.param('cardId', cardController.cardByID);

app.get('/', function (req, res){ 
    res.sendFile(__dirname + "/public/views/index.html");
});

app.get('/test', function (req, res){
    res.render(__dirname + "/usercard/mytestcard/index.html");
});

app.post('/card/create', cardController.createCard);

app.get('/:cardId', function(req, res){
    var cardData = {
        cardText: req.card.cardText,
        cardSoundURL: req.card.cardSoundURL
    }
    res.render(__dirname + req.card.templatePath, cardData); 

});

app.get('/card/img360/list', function(req, res){

});

var port = 80;
app.listen(port);
console.log('Listening on port', port);


 
